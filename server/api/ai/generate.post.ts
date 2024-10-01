import { decreaseCredit } from "@/server/api/ai/decrease-credit";
export const maxDuration = 300;

export default defineEventHandler(async (event) => {
  const requestBody = await readBody(event);
  const inputImageBase64 = requestBody.input;

  decreaseCredit(event);

  return {
    output: inputImageBase64,
  };
});
