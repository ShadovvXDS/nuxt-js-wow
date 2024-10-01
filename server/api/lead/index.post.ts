import { createSSRClient } from "@/libs/supabase/server";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
export default defineEventHandler(async (event) => {
    const supabase = createSSRClient(event);
    const body = await readBody(event);
    if (!body.email) {
        throw createError({ statusCode: 400, statusMessage: "Email is required" });
    }
    try {
        await supabase.from("leads").insert({ email: body.email });

        return {};
    } catch (error) {
        console.error(error);
        throw error;
    }
});
