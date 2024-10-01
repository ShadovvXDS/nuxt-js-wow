<template>
  <section class="mx-8 relative" id="testimonials">
    <div
      class="absolute top-[-118px] right-0 w-[436px] h-[436px] bg-surface-brand rounded-full blur-[150px] opacity-10">
    </div>
    <div class="py-24 max-w-7xl bg-slate-50  flex flex-col items-start mx-auto justify-start rounded-[48px]">
      <div class="flex px-16 flex-col justify-start items-center text-center w-full">
        <div
          class="px-3 py-2 bg-green-700 bg-opacity-5 rounded-[200px] border border-surface-brand justify-start items-end gap-2 flex mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
            <path opacity="0.2"
              d="M8.9375 6.125V11.75H3.625C3.45924 11.75 3.30027 11.6842 3.18306 11.5669C3.06585 11.4497 3 11.2908 3 11.125V6.125C3 5.95924 3.06585 5.80027 3.18306 5.68306C3.30027 5.56585 3.45924 5.5 3.625 5.5H8.3125C8.47826 5.5 8.63723 5.56585 8.75444 5.68306C8.87165 5.80027 8.9375 5.95924 8.9375 6.125ZM17.375 5.5H12.6875C12.5217 5.5 12.3628 5.56585 12.2456 5.68306C12.1283 5.80027 12.0625 5.95924 12.0625 6.125V11.125C12.0625 11.2908 12.1283 11.4497 12.2456 11.5669C12.3628 11.6842 12.5217 11.75 12.6875 11.75H18V6.125C18 5.95924 17.9342 5.80027 17.8169 5.68306C17.6997 5.56585 17.5408 5.5 17.375 5.5Z"
              fill="#00C16A" />
            <path
              d="M8.3125 4.875H3.625C3.29348 4.875 2.97554 5.0067 2.74112 5.24112C2.5067 5.47554 2.375 5.79348 2.375 6.125V11.125C2.375 11.4565 2.5067 11.7745 2.74112 12.0089C2.97554 12.2433 3.29348 12.375 3.625 12.375H8.3125V13C8.3125 13.663 8.04911 14.2989 7.58027 14.7678C7.11143 15.2366 6.47554 15.5 5.8125 15.5C5.64674 15.5 5.48777 15.5658 5.37056 15.6831C5.25335 15.8003 5.1875 15.9592 5.1875 16.125C5.1875 16.2908 5.25335 16.4497 5.37056 16.5669C5.48777 16.6842 5.64674 16.75 5.8125 16.75C6.80674 16.749 7.75997 16.3535 8.46301 15.6505C9.16605 14.9475 9.56147 13.9942 9.5625 13V6.125C9.5625 5.79348 9.4308 5.47554 9.19638 5.24112C8.96196 5.0067 8.64402 4.875 8.3125 4.875ZM8.3125 11.125H3.625V6.125H8.3125V11.125ZM17.375 4.875H12.6875C12.356 4.875 12.038 5.0067 11.8036 5.24112C11.5692 5.47554 11.4375 5.79348 11.4375 6.125V11.125C11.4375 11.4565 11.5692 11.7745 11.8036 12.0089C12.038 12.2433 12.356 12.375 12.6875 12.375H17.375V13C17.375 13.663 17.1116 14.2989 16.6428 14.7678C16.1739 15.2366 15.538 15.5 14.875 15.5C14.7092 15.5 14.5503 15.5658 14.4331 15.6831C14.3158 15.8003 14.25 15.9592 14.25 16.125C14.25 16.2908 14.3158 16.4497 14.4331 16.5669C14.5503 16.6842 14.7092 16.75 14.875 16.75C15.8692 16.749 16.8225 16.3535 17.5255 15.6505C18.2285 14.9475 18.624 13.9942 18.625 13V6.125C18.625 5.79348 18.4933 5.47554 18.2589 5.24112C18.0245 5.0067 17.7065 4.875 17.375 4.875ZM17.375 11.125H12.6875V6.125H17.375V11.125Z"
              fill="#00C16A" />
          </svg>

          <div class="Testimonials text-content-brand text-sm font-semibold leading-[18.20px]">
            Testimonials
          </div>
        </div>
        <div class="flex flex-col justify-start items-center text-center w-full mb-20">
          <div class="mb-8">
            <h2 class="sm:text-5xl text-4xl text-center leading-16  font-extrabold text-base-content">
              Join over 250 makers leveraging Nuxt Starter AI!
            </h2>
          </div>
          <p
            class="lg:w-2/3 mx-auto text-center text-gray-800 text-opacity-80 text-base font-normal font-inter leading-relaxed">
            These makers took the leap to ship their apps faster in days not
            weeks!
          </p>
        </div>
      </div>
      <ul role="list"
        class="grid overflow-hidden max-w-2xl grid-cols-1 gap-6 py-2 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
        <li>
          <ul role="list" class="flex gap-x-6 gap-6 duration-500 sm:gap-x-8 mb-4 loop-slider">
            <div class="inner flex gap-6" :style="{ width: `${462 * 6}px`, flexBasis: `${462 * 6}px` }">
              <Testimonial v-for="(e, i) in threeItemsArr" :key="i" :i="i" />
              <Testimonial v-for="(e, i) in threeItemsArr" :key="i + 10" :i="i" />
            </div>
          </ul>
          <div class="inner-2 flex gap-6">
            <ul role="list" class="flex gap-x-6  sm:gap-x-8">
              <Testimonial v-for="(e, i) in threeItemsArr" :key="i" :i="i + 3" />
              <Testimonial v-for="(e, i) in threeItemsArr" :key="i + 50" :i="i + 3" />
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="tsx" setup>
import Testimonial from './Testimonial.vue';
const threeItemsArr = [1, 1, 1];

</script>

<style>
.loop-slider {
  .inner {
    display: flex;
    width: fit-content;
    animation: loop 50s linear infinite;
  }
}


.inner-2 {
  display: flex;
  width: fit-content;
  animation: loop 50s linear infinite;
  animation-direction: reverse;
}


@keyframes loop {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-1870px);
  }
}
</style>