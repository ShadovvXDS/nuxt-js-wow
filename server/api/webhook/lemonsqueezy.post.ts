import { addPlanToCustomer, manageSubscriptionStatusChange } from '@/libs/lemon-squeezy-supabase-admin';
import crypto from "crypto";
import { OrderObject, SubscriptionInvoiceObject, SubscriptionObject, WebhookBody } from './types';
import config from '@/config';

const relevantEvents = new Set([
    'order_created',
    'subscription_updated',
    'subscription_cancelled',
    'subscription_payment_success'
]);

export default defineEventHandler(async (event) => {
    const body = (await readRawBody(event, "utf-8")) ?? '';
    const signatureHeader = getHeader(event, "x-signature") ?? '';
    const hmac = crypto.createHmac("sha256", process.env.LEMONSQUEEZY_WEBHOOK_SECRET || "");
    const digest = Buffer.from(hmac.update(body).digest("hex"), "utf8");
    const signature = Buffer.from(signatureHeader, "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
        throw createError({ statusCode: 400, statusMessage: "Invalid signature." })
    }
    const eventName = getHeader(event, "x-event-name") ?? '';
    if (relevantEvents.has(eventName)) {
        const payload = JSON.parse(body);
        try {
            if (eventName === 'subscription_payment_success') {
                const {
                    meta,
                    data: subscription,
                } = payload as WebhookBody<SubscriptionInvoiceObject>;
                await manageSubscriptionStatusChange(
                    subscription.attributes.subscription_id,
                    subscription.attributes.customer_id,
                    meta.custom_data.user_id,
                );
            } else if (eventName === 'subscription_updated' || eventName === 'subscription_cancelled') {
                const {
                    meta,
                    data: subscription,
                } = payload as WebhookBody<SubscriptionObject>;
                await manageSubscriptionStatusChange(
                    subscription.attributes.first_subscription_item.subscription_id,
                    subscription.attributes.customer_id,
                    meta.custom_data.user_id
                );
            } else if (eventName === 'order_created') {
                const {
                    meta,
                    data: order,
                } = payload as WebhookBody<OrderObject>;
                if (order.attributes.status === 'paid') {
                    const variantId = order.attributes.first_order_item.variant_id;
                    const userId = meta.custom_data.user_id;
                    const plan = config.lemonsqueezy.plans.find(price => price.variantId === variantId);
                    await addPlanToCustomer(plan!, userId)
                }
            }
        } catch (error) {
            console.log(error);
            return new Response(
                'Webhook handler failed. View your nuxtjs function logs.',
                {
                    status: 400
                }
            );
        }
    }
    return new Response(JSON.stringify({ received: true }));
});