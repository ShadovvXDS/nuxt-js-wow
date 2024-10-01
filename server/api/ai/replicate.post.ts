import axios from "axios";
import axiosRetry from "axios-retry";

export const maxDuration = 300;

export default defineEventHandler(async (event) => {
  const requestBody = await readBody(event);
  const base64 = requestBody.image.replace(/^data:image\/\w+;base64,/, "");
  let data = JSON.stringify({
    // MODELS INPUT AS A JSON OBJECT.
    version: "#YOUR_DEPLOYED_MODEL_VERSION", // YOUR DEPLOYED MODEL VERSION
    input: {
      image: base64,
      prompt: requestBody.prompt,
      seed: requestBody.seed,
      style: requestBody.style,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.replicate.com/v1/predictions",
    headers: {
      Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios.interceptors.response.use(
    function (response) {
      // Convert status code to 500 if 200 RESPONSE RETURNS "FAILED" or "IN_QUEUE" status to retry
      if (
        response.data.status === "FAILED" ||
        response.data.status === "IN_QUEUE"
      ) {
        response.status = 500;
        throw response;
      }
      response.status = 200;
      return response;
    },
    function (error) {
      return error;
    }
  );
  // Custom retry delay

  try {
    axiosRetry(axios, {
      retryDelay: (retryCount) => {
        return retryCount * 1;
      },
      retries: 15,
    });

    let result = await axios.request(config);
    if (result.status === 200) {
      if (result.data.status === "failed") {
        throw createError({
          statusCode: 500,
          statusMessage: result.data,
        });
      }

      let waitCount = 0;
      let predId = result.data.id;
      while (
        result.data.status == "starting" ||
        result.data.status == "processing"
      ) {
        if (waitCount > 20) {
          // at least 20 seconds
          throw createError({
            statusCode: 500,
            statusMessage: result.data,
          }); // max wait, timeout
        }
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1 second
        result = await axios.get(
          `https://api.replicate.com/v1/predictions/${predId}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        waitCount++;
        if (result.data.status === "failed") {
          throw createError({
            statusCode: 500,
            statusMessage: result.data,
          });
        }
        if (result.data.status === "succeeded") {
          return result.data;
        }
      }
    } else {
      return result.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
});
