import { type ConfigProps } from "./types/config";

const config: ConfigProps = {
  // REQUIRED
  appName: "NuxtStarterAI",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "NuxtStarterAI: All in one NuxtJs boilerplate for your next startup. Nuxt.js, Tailwind CSS, Supabase, Stripe, Lemon Squeezy, and more. already integrated!",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "nuxtstarter.ai",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  canvas: {
    hideShapes: false,
    hideIcons: false,
    hideBrands: false,
    hideUpload: false,
    hideEraser: false,
    hideDownload: false,
    hideClear: false,
    hideUndoRedo: false,
    hideGrid: false,
    hideFullscreen: false,
  },
  paymentProvider: "lemonsqueezy",
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1OY9QNDZVfBq3yOWj6NtDjrV"
            : "price_1OY9QNDZVfBq3yOWj6NtDjrV",
        mode: "subscription",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Standard",
        duration: "Pay once, use forever",
        freeDuration: "",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Starter",
        // The price you want to display, the one user will be charged on Stripe.
        price: 189,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 249,
        credits: 100,
        priority: 0,
        features: [
          {
            name: "NuxtJS Boilerplate",
          },
          { name: "App-Landing Page Components" },
          { name: "Lemon Squeezy/Stripe Integration" },
          { name: "Startup Marketing Guide" },
          { name: "Supabase" },
          { name: "Analytics & Google Tag Manager " },
          { name: "Social OAuth/Magic Link" },
          { name: "Replicate & Runpod AI Integrations" },
          { name: "Seo Tags" },
          { name: "Blog Framework" },
          { name: "Email Integration" },
          { name: "Lifetime Update" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1OY9QmDZVfBq3yOWHdxdDxJm"
            : "price_1OY9QmDZVfBq3yOWHdxdDxJm",
        mode: "subscription",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Pro",
        duration: "Yearly",
        freeDuration: "GET 2 MONTHS FREE",
        description: "You want to stay here!",
        price: 199,
        priceAnchor: 299,
        credits: 100,
        priority: 1,
        features: [
          {
            name: "Unlimited Usage",
          },
          { name: "Private Generations" },
          { name: "Commercial License" },
        ],
      },
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1OkpDGDZVfBq3yOWRY5bPMft"
            : "price_1OkpDGDZVfBq3yOWRY5bPMft",
        mode: "payment",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "100 Credits",
        duration: "",
        freeDuration: "",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for exploring",
        // The price you want to display, the one user will be charged on Stripe.
        price: 10,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 15,
        credits: 100,
        priority: 0,
        features: [
          {
            name: "Unlimited Usage",
          },
          { name: "Private Generations" },
          { name: "Commercial License" },
        ],
      },
    ],
  },
  lemonsqueezy: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        variantId: process.env.NODE_ENV === "development" ? 331434 : 285425,
        mode: "subscription",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Standart",
        duration: "Pay once, use forever",
        freeDuration: "",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Starter Pack",
        // The price you want to display, the one user will be charged on Stripe.
        price: 9.99,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priority: 0,
        credits: 0,
        features: [
          {
            name: "NuxtJS Boilerplate",
          },
          { name: "App-Landing Page Components" },
          { name: "Lemon Squeezy/Stripe Integration" },
          { name: "Startup Marketing Guide" },
          { name: "Supabase" },
          { name: "Analytics & Google Tag Manager " },
          { name: "Social OAuth/Magic Link" },
          { name: "Replicate & Runpod AI Integrations" },
          { name: "Seo Tags" },
          { name: "Blog Framework" },
          { name: "Email Integration" },
          {
            name: "Lifetime Update",
            specialCase: "updated 4 days ago",
            excluded: true,
          },
          { name: "AI for terms/privacy generation", excluded: true },
        ],
      },
      {
        variantId: process.env.NODE_ENV === "development" ? 285395 : 285426,
        mode: "payment",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Pro",
        duration: "Pay once, use forever",
        freeDuration: "",
        description: "All in",
        price: 199,
        priority: 1,
        credits: 100,
        features: [
          {
            name: "NuxtJS Boilerplate",
          },
          { name: "App-Landing Page Components" },
          { name: "Lemon Squeezy/Stripe Integration" },
          { name: "Startup Marketing Guide" },
          { name: "Supabase" },
          { name: "Analytics & Google Tag Manager " },
          { name: "Social OAuth/Magic Link" },
          { name: "Replicate & Runpod AI Integrations" },
          { name: "Seo Tags" },
          { name: "Blog Framework" },
          { name: "Email Integration" },
          { name: "Lifetime Update", specialCase: "updated 4 days ago" },
          { name: "ChatGPT Prompts for terms/privacy" },
        ],
      },
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        variantId: process.env.NODE_ENV === "development" ? 257037 : 257037,
        mode: "payment",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Custom Plan",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Here to help you on your project.",
        custom: true, // This is a custom plan, change to button to "Contact us"
        // The price you want to display, the one user will be charged on Stripe.
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        credits: 100,
        priority: 0,
        features: [
          {
            name: "Nuxt Starter AI Boilerplate",
          },
          { name: "Dedicated design/development team" },
          { name: "All in one code/design for your project!" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mail",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Nuxt Starter AI <noreply@mail.nuxtstarter.ai>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Berk at Nuxt Starter AI <berk@mail.nuxtstarter.ai>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "support@mail.nuxtstarter.ai",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "berkelmas96@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: "#00C16A",
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
