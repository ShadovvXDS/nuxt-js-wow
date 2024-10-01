interface CreateCheckoutParams {
    variantId: number;
    mode: "payment" | "subscription";
    successUrl: string;
    cancelUrl: string;
    couponId?: string | null;
    clientReferenceId?: string;
    user?: {
        customerId?: string;
        email?: string;
    };
}

interface CreateCustomerPortalParams {
    customerId: number;
    returnUrl: string;
}

// This is used to create a lemonsqueezy Checkout for one-time payments. It's usually triggered with the <ButtonCheckout /> component. Webhooks are used to update the user's state in the database.
export const createCheckout = async ({
    user,
    mode,
    clientReferenceId,
    successUrl,
    cancelUrl,
    couponId,
    variantId,
}: CreateCheckoutParams): Promise<string | null> => {

    // const ls = process.server ? new LemonSqueezy(process.env.LEMONSQUEEZY_API_KEY || "") : undefined;
    try {
        const attributes = {
            'checkout_options': {
                'embed': true,
                'media': false,
                'button_color': '#fde68a'
            },
            'checkout_data': {
                'email': user?.email || "", // Displays in the checkout form
                'custom': {
                    'user_id': clientReferenceId // Sent in the background; visible in webhooks and API calls
                }
            },
            'product_options': {
                'enabled_variants': [variantId], // Only show the selected variant in the checkout
                'redirect_url': successUrl,
                'receipt_link_url': successUrl,
                // 'receipt_button_text': 'Go to your account',
                // 'receipt_thank_you_note': 'Thank you for signing up to Lemonstand!'
            }
        }

        var requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/vnd.api+json',
                "Content-Type": 'application/vnd.api+json',
                Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`
            },
            body: JSON.stringify({
                data: {
                    "type": "checkouts",
                    attributes,
                    "relationships": {
                        "store": {
                            "data": {
                                "type": "stores",
                                "id": process.env.LEMONSQUEEZY_STORE_ID as string
                            }
                        },
                        "variant": {
                            "data": {
                                "type": "variants",
                                "id": variantId.toString()
                            }
                        }
                    }
                }
            }),
        }

        const response = await fetch(`https://api.lemonsqueezy.com/v1/checkouts`, requestOptions)
        const checkout = await response.json();

        return checkout.data.attributes.url;
    } catch (e) {
        console.error(e);
        return null;
    }
};

// This is used to create Customer Portal sessions, so users can manage their subscriptions (payment methods, cancel, etc..)
export const createCustomerPortal = async ({
    customerId,
    returnUrl,
}: CreateCustomerPortalParams): Promise<string> => {
    var requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.api+json',
            "Content-Type": 'application/vnd.api+json',
            Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`
        },
    }

    const response = await fetch(`https://api.lemonsqueezy.com/v1/customers/${customerId}`, requestOptions)
    const customer = await response.json();
    return customer.data.attributes.urls.customer_portal || "";
};

export const getSubscriptionWithProduct = async (
    subscriptionId: number) => {
    var requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.api+json',
            "Content-Type": 'application/vnd.api+json',
            Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`
        },
    }

    const response = await fetch(`https://api.lemonsqueezy.com/v1/subscriptions/${subscriptionId}?include=product`, requestOptions)
    const subscription = await response.json();
    return subscription;
};