<template>
  <ButtonCheckout
    :priceId="config.stripe.plans[1].priceId"
    :variantId="config.lemonsqueezy.plans[1].variantId"
    placement="landing_page"
    :mode="(config.lemonsqueezy.plans[1].mode as any)"
    variant="secondary"
    text="Get NuxtStarter"
    :withIcon="false"
  />
</template>

<script lang="ts" setup>
  import ButtonCheckout from "@/components/landing-components/ButtonCheckout.vue";
  import config from "@/config";

</script>

