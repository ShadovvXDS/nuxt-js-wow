<template>

  <Header />
  <main>
    <Hero2 />
    <div className="hidden">
      <NuxtLink to="/signin"></NuxtLink>
    </div>
    <PainExplanation />
    <FeaturesShowcase />
    <AppComponentsShowcase />
    <SampleAppShowcase />
    <Marketing />
    <Pricing />
    <Pricing2 />
    <Testimonials2 />
    <Testimonials1 />
    <FAQ />
    <CTA description="Don’t overthink, ship your startup in days and start making $$$ online!" />
  </main>
  <Footer />

</template>

<script lang="ts" setup>
import Header from "@/components/landing-components/Header.vue"
import Hero2 from "@/components/landing-components/Hero2.vue";
import PainExplanation from "@/components/landing-components/PainExplanation.vue";
import FeaturesShowcase from "@/components/landing-components/FeaturesShowcase/FeaturesShowcase.vue";
import AppComponentsShowcase from "@/components/landing-components/AppComponentsShowcase/AppComponentsShowcase.vue";
import SampleAppShowcase from "@/components/landing-components/SampleAppShowcase/SampleAppShowcase.vue";
import Pricing from "@/components/landing-components/Pricing/Pricing.vue";
import Testimonials2 from "@/components/landing-components/Testimonials2/Testimonials2.vue";
import Testimonials1 from "@/components/landing-components/Testimonials1/Testimonials1.vue";
import Marketing from "@/components/landing-components/Marketing/Marketing.vue";
import Pricing2 from "@/components/landing-components/Pricing2/Pricing2.vue";
import FAQ from "@/components/landing-components/FAQ/FAQ.vue";
import CTA from "@/components/landing-components/CTA/CTA.vue";
import Footer from "@/components/landing-components/Footer/Footer.vue";
</script>

<style></style>