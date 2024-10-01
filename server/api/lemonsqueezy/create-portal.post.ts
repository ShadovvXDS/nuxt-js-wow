import { createCustomerPortal } from '~/libs/lemonsqueezy';
import { serverSupabaseUser } from '#supabase/server';
import { getCustomerId } from "~/libs/lemon-squeezy-supabase-admin";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        const user = await serverSupabaseUser(event)

        // User who are not logged in can't make a purchase
        if (!user) {
            throw createError({ statusCode: 401, statusMessage: "You must be logged in to view billing information." });
        } else if (!body.returnUrl) {
            throw createError({ statusCode: 400, statusMessage: "Return URL is required" });
        }

        const customerId = await getCustomerId(user.id);
        if (!customerId) {
            throw createError({ statusCode: 400, statusMessage: "You don't have a billing account yet. Make a purchase first." });
        }

        const lemonPortalUrl = await createCustomerPortal({
            customerId: customerId,
            returnUrl: body.returnUrl,
        });
        return { url: lemonPortalUrl };
    } catch (error) {
        console.error(error);
        throw error;
    }
});
