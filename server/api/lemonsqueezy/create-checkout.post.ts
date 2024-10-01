import { createCheckout } from '~/libs/lemonsqueezy';
import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
    try {
        const user = await serverSupabaseUser(event)

        // User who are not logged in can't make a purchase
        if (!user) {
            throw createError({ statusCode: 401, statusMessage: "You must be logged in to make a purchase." });
        }

        const body = await readBody(event);

        const { variantId, mode, successUrl, cancelUrl } = body;

        if (!variantId) {
            throw createError({ statusCode: 400, statusMessage: "Variant ID is required" });
        } else if (!successUrl || !cancelUrl) {
            throw createError({ statusCode: 400, statusMessage: "Success and cancel URLs are required" });
        } else if (!body.mode) {
            throw createError({ statusCode: 400, statusMessage: "Mode is required (either 'payment' for one-time payments or 'subscription' for recurring subscription)" });
        }

        const lemonsqueezySessionUrl = await createCheckout({
            variantId,
            mode: mode,
            successUrl,
            cancelUrl,
            clientReferenceId: user?.id,
            user: {
                email: user?.email,
                // If the user has already purchased, it will automatically prefill it's credit card
                //customerId: customerId,
            },
            // If you send coupons from the frontend, you can pass it here
            // couponId: body.couponId,
        });

        return { url: lemonsqueezySessionUrl };
    } catch (error) {
        console.error(error);
        throw error;
    }
});
