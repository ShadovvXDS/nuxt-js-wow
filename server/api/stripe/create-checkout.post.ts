import { createCheckout } from '~/libs/stripe';
import { serverSupabaseUser } from '#supabase/server';
import { createOrRetrieveCustomer } from '~/libs/stripe-supabase-admin';

export default defineEventHandler(async (event) => {
    try {
        const user = await serverSupabaseUser(event)

        // User who are not logged in can't make a purchase
        if (!user) {
            throw createError({ statusCode: 401, statusMessage: "You must be logged in to make a purchase." });
        }

        const body = await readBody(event);

        const { priceId, mode, successUrl, cancelUrl } = body;

        if (!priceId) {
            throw createError({ statusCode: 400, statusMessage: "Price ID is required" });
        } else if (!successUrl || !cancelUrl) {
            throw createError({ statusCode: 400, statusMessage: "Success and cancel URLs are required" });
        } else if (!body.mode) {
            throw createError({ statusCode: 400, statusMessage: "Mode is required (either 'payment' for one-time payments or 'subscription' for recurring subscription)" });
        }

        const customerId = await createOrRetrieveCustomer({
            uuid: user?.id || '',
            email: user?.email || ''
        });

        const stripeSessionURL = await createCheckout({
            priceId,
            mode: mode,
            successUrl,
            cancelUrl,
            clientReferenceId: user?.id,
            user: {
                email: user?.email,
                // If the user has already purchased, it will automatically prefill it's credit card
                customerId: customerId,
            },
            // If you send coupons from the frontend, you can pass it here
            // couponId: body.couponId,
        });

        return { url: stripeSessionURL };
    } catch (error) {
        console.error(error);
        throw error;
    }
});
