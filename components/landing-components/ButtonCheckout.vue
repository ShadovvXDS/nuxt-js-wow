<template>
  <button :class="{
    'btn btn-block group text-lg': true,

    'btn btn-primary text-content-on-brand bg-surface-brand fill-primary-content': variant === 'primary',
    'flex justify-center items-center hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none h-11 text-base font-medium rounded-sm px-xs text-border-brand mt-8 bg-white': variant !== 'primary'
  }" @click="handleClick">

    <span v-if="isLoading" class="loading loading-spinner loading-xs"></span>
    <!-- License: MIT. Made by Mikolaj Dobrucki: https://github.com/mikolajdobrucki/ikonate -->
    <svg v-if="withIcon"
      class="w-5 h-5 transition-transform duration-200 fill-white group-hover:scale-110 group-hover:-rotate-3"
      viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
    </svg>
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import config from "@/config";

import { defineProps, type PropType } from 'vue';
import apiClient from "@/libs/api";
import { useAuthStore } from "~/store/useAuthStore";

const props = defineProps({
  variantId: { type: Number, required: true },
  priceId: { type: String, required: true },
  mode: { type: String as PropType<"payment" | "subscription">, required: false },
  placement: { type: String as PropType<"inside_app" | "landing_page" | "docs">, required: false },
  variant: { type: String as PropType<"primary" | "secondary">, required: false },
  text: { type: String, required: false },
  withIcon: { type: Boolean, required: false },
});

const { variantId, priceId, mode, placement, variant, text, withIcon } = props;

const router = useRouter();
const isLoading = ref<boolean>(false);
const store = useAuthStore();
const { user } = storeToRefs(store);

const getSHA256Hash = async (input: string) => {
  const textAsBuffer = new TextEncoder()?.encode(input);
  const hashBuffer = await window?.crypto?.subtle?.digest(
    "SHA-256",
    textAsBuffer
  );
  const hashArray = Array?.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    ?.map((item) => item?.toString(16)?.padStart(2, "0"))
    ?.join("");
  return hash;
};

const handleClick = async () => {
  if (user) {
    await handlePayment();
  } else {
    router.push(config.auth.loginUrl)
  }
};

const handlePayment = async () => {
  if (!process.client) return;
  // GOOGLE ADS EVENT NAME
  (window as any).dataLayer?.push({
    event: "proceed_checkout",
    info: {
      placement: placement,
    },
  });
  isLoading.value = true;
  try {
    if (config.paymentProvider === "stripe") {
      const { url }: { url: string } = await apiClient.post(
        "/stripe/create-checkout",
        {
          priceId,
          successUrl: window.location.href,
          cancelUrl: window.location.href,
          mode,
        }
      );

      window.location.href = url;
    } else {
      const { url }: { url: string } = await apiClient.post(
        "/lemonsqueezy/create-checkout",
        {
          variantId,
          successUrl: window.location.href,
          cancelUrl: window.location.href,
          mode,
        }
      );

      window.location.href = url;
    }
  } catch (e) {
    console.error(e);
  }

  isLoading.value = false;
  const hashedEmail = await getSHA256Hash(user.value?.email || "");
  // TIKTOK PIXEL EVENT NAME
  (window as any).dataLayer.push({
    event: "InitiateCheckout",
    sha256_email: hashedEmail,
    content_id: variantId,
    contents: [
      {
        content_id: variantId,
        content_name: variantId,
        price: "19.00",
        quantity: 1,
        content_type: "Product",
      },
    ],
  });
};
</script>

<style></style>