<template>
  <script type="application/ld+json" v-if="ldJson" v-html="ldJson"></script>
</template>

<script lang="ts" setup>
import config from "@/config";
import { onMounted, ref } from 'vue';

const ldJson = ref<string | null>(null);

onMounted(() => {

  const ldJsonData = {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    name: config.appName,
    description: config.appDescription,
    image: `https://${config.domainName}/icon.png`,
    url: `https://${config.domainName}/`,
    datePublished: "2024-01-01",
    applicationCategory: "DesignApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "314",
    },
    offers: [
      {
        "@type": "Offer",
        price: "19.00",
        priceCurrency: "USD",
      },
    ],
  };

  ldJson.value = JSON.stringify(ldJsonData);
});

</script>