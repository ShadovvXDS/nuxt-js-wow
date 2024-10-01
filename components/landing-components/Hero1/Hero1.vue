<template>
  <section class="w-full px-10 mt-[152px] relative">
    <div
      class="absolute right-[50%] left-[50%] translate-x-[-50%] min-w-[40%] max-sm:min-w-[70%] max-[768px]:w-[85%] flex justify-center items-center flex-col max-sm:top-[-22%] max-lg:top-[-15%] text-center">
      <h1 class=" text-[60px] max-[1245px]:text-[50px] max-[1035px]:text-[29px] max-sm:text-[29px] font-extrabold mb-0">
        Launch Your Startup in Days,
      </h1>
      <h1
        class="text-[60px] max-[1245px]:text-[50px]  max-sm:text-[29px] max-[1035px]:text-[29px] font-extrabold gradient-text mb-0">
        not weeks,
      </h1>
      <h3 class="font-regular mt-3 text-center text-[#1F2937] text-sm max-sm:text-xs">
        Save your time from all the boring stuff, such as API setup, customer support and more...
      </h3>
      <NuxtLink
        class="h-11 w-[200px] text-sm mt-6 font-medium rounded-sm px-xs text-content-on-brand bg-surface-brand flex justify-center items-center hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none gap-2"
        :to="config.auth.loginUrl">
        Get Started
      </NuxtLink>
      <div
        class="flex gap-[40px] mt-[40px] max-sm:mt-[15px] max-[700px]:mt-5 items-center justify-center max-sm:flex-col">
        <Rating />
      </div>
    </div>

    <div class="smallest">

      <img src="/assets/hero-540.png" class="w-full" alt="SVG Hero Background" />
    </div>

    <div class="a541to600">

      <img src="/assets/hero-540-600.png" class="w-full" alt="SVG Hero Background" />
    </div>

    <div class="a601to800">

      <img src="/assets/hero-600-800.png" class="w-full" alt="SVG Hero Background" />
    </div>

    <div class="a801to1069">

      <img src="/assets/hero-800-1000.png" class="w-full" alt="SVG Hero Background" />
    </div>

    <div class="a1070to1399">

      <img src="/assets/hero/hero-1070-1399.svg" class="w-full" alt="SVG Hero Background" />
    </div>

    <div class="a1400to1599">

      <img src="/assets/hero/hero-1400-1599.svg" class="w-full" alt="SVG Hero Background" />
    </div>

    <div class="largest">

      <img src="/assets/hero/hero-plus-1600.svg" class="w-full" alt="SVG Hero Background" />
    </div>
  </section>
</template>

<script lang="tsx" setup>
import Rating from "@/components/landing-components/Rating/Rating.vue";
import config from "@/config";

</script>

<style>
.gradient-text {
  /* Fallback: Set a background color. */
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(135deg, #3E00FA 0%, #6FA0FF 100%);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}


@media (max-width: 540px) {

  .a541to600,
  .a601to800,
  .a801to1069,
  .a1070to1399,
  .a1400to1599,
  .largest {
    display: none;
  }
}

@media (min-width: 541px) and (max-width: 600px) {

  .smallest,
  .a601to800,
  .a801to1069,
  .a1070to1399,
  .a1400to1599,
  .largest {
    display: none;
  }
}

@media (min-width: 601px) and (max-width: 800px) {

  .smallest,
  .a541to600,
  .a801to1069,
  .a1070to1399,
  .a1400to1599,
  .largest {
    display: none;
  }
}

@media (min-width: 801px) and (max-width: 1069px) {

  .smallest,
  .a541to600,
  .a601to800,
  .a1070to1399,
  .a1400to1599,
  .largest {
    display: none;
  }
}

@media (min-width: 1070px) and (max-width: 1399px) {

  .smallest,
  .a541to600,
  .a601to800,
  .a801to1069,
  .a1400to1599,
  .largest {
    display: none;
  }
}

@media (min-width: 1400px) and (max-width: 1599px) {

  .smallest,
  .a541to600,
  .a601to800,
  .a801to1069,
  .a1070to1399,
  .largest {
    display: none;
  }
}

@media (min-width: 1600px) {

  .smallest,
  .a541to600,
  .a601to800,
  .a801to1069,
  .a1070to1399,
  .a1400to1599 {
    display: none;
  }
}
</style>