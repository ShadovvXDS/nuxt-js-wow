<template>
  <section class="mx-10 my-10 flex max-lg:flex max-lg:flex-col max-lg:items-center rounded-2xl mb-[96px] py-8 relative "
    :style="{
      background: 'linear-gradient(135deg, #00C16A 0%, #0C8B52 100%)',
    }">
    <div
      class="absolute bottom-[-150px] left-[-90px] w-[436px] h-[436px] max-sm:w-[200px] max-sm:h-[200px] bg-surface-brand rounded-full blur-[100px] opacity-10 z-10 pointer-events-none">
    </div>
    <div class="basis-[40%] max-lg:basis-[100%] pl-16 mt-auto mb-auto max-sm:p-3">
      <div class="inline-block">
        <div class="px-3 py-2 bg-white rounded-[200px] border border-surface-brand gap-2 pr-4 flex mb-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path opacity="0.2"
              d="M15.2203 11.8306L11.1844 13.3149C11.1003 13.3457 11.024 13.3944 10.9607 13.4577C10.8975 13.521 10.8487 13.5973 10.818 13.6813L9.3336 17.7173C9.2898 17.836 9.21067 17.9384 9.10688 18.0107C9.00309 18.083 8.87963 18.1218 8.75313 18.1218C8.62663 18.1218 8.50317 18.083 8.39938 18.0107C8.29559 17.9384 8.21647 17.836 8.17266 17.7173L6.68829 13.6813C6.65752 13.5973 6.60879 13.521 6.54551 13.4577C6.48223 13.3944 6.40592 13.3457 6.32188 13.3149L2.28594 11.8306C2.16727 11.7868 2.06487 11.7076 1.99255 11.6038C1.92023 11.5001 1.88145 11.3766 1.88145 11.2501C1.88145 11.1236 1.92023 11.0001 1.99255 10.8963C2.06487 10.7926 2.16727 10.7134 2.28594 10.6696L6.32188 9.18525C6.40592 9.15448 6.48223 9.10576 6.54551 9.04248C6.60879 8.9792 6.65752 8.90288 6.68829 8.81884L8.17266 4.78291C8.21647 4.66423 8.29559 4.56184 8.39938 4.48951C8.50317 4.41719 8.62663 4.37842 8.75313 4.37842C8.87963 4.37842 9.00309 4.41719 9.10688 4.48951C9.21067 4.56184 9.2898 4.66423 9.3336 4.78291L10.818 8.81884C10.8487 8.90288 10.8975 8.9792 10.9607 9.04248C11.024 9.10576 11.1003 9.15448 11.1844 9.18525L15.2203 10.6696C15.339 10.7134 15.4414 10.7926 15.5137 10.8963C15.586 11.0001 15.6248 11.1236 15.6248 11.2501C15.6248 11.3766 15.586 11.5001 15.5137 11.6038C15.4414 11.7076 15.339 11.7868 15.2203 11.8306Z"
              fill="#00C16A" />
            <path
              d="M15.4359 10.0828L11.4039 8.59844L9.91954 4.56328C9.83163 4.32448 9.6726 4.11838 9.46388 3.9728C9.25517 3.82722 9.00682 3.74917 8.75235 3.74917C8.49788 3.74917 8.24953 3.82722 8.04082 3.9728C7.8321 4.11838 7.67306 4.32448 7.58516 4.56328L6.09922 8.59375L2.06407 10.0781C1.82526 10.166 1.61917 10.3251 1.47359 10.5338C1.32801 10.7425 1.24995 10.9908 1.24995 11.2453C1.24995 11.4998 1.32801 11.7481 1.47359 11.9568C1.61917 12.1656 1.82526 12.3246 2.06407 12.4125L6.09376 13.9062L7.57813 17.9391C7.66603 18.1779 7.82507 18.384 8.03379 18.5295C8.2425 18.6751 8.49085 18.7532 8.74532 18.7532C8.99979 18.7532 9.24813 18.6751 9.45685 18.5295C9.66556 18.384 9.8246 18.1779 9.91251 17.9391L11.3969 13.907L15.432 12.4227C15.6708 12.3348 15.8769 12.1757 16.0225 11.967C16.1681 11.7583 16.2462 11.5099 16.2462 11.2555C16.2462 11.001 16.1681 10.7527 16.0225 10.5439C15.8769 10.3352 15.6708 10.1762 15.432 10.0883L15.4359 10.0828ZM10.968 12.7344C10.7991 12.7964 10.6457 12.8944 10.5185 13.0216C10.3913 13.1488 10.2932 13.3022 10.2313 13.4711L8.74688 17.4914L7.26563 13.468C7.20359 13.3 7.10589 13.1474 6.97925 13.0208C6.85261 12.8941 6.70004 12.7964 6.53204 12.7344L2.51172 11.25L6.53204 9.76562C6.70004 9.70359 6.85261 9.60589 6.97925 9.47925C7.10589 9.35261 7.20359 9.20004 7.26563 9.03203L8.75001 5.01172L10.2344 9.03203C10.2964 9.20093 10.3944 9.35431 10.5216 9.48153C10.6488 9.60875 10.8022 9.70676 10.9711 9.76875L14.9914 11.2531L10.968 12.7344ZM11.25 3.125C11.25 2.95924 11.3159 2.80027 11.4331 2.68306C11.5503 2.56585 11.7092 2.5 11.875 2.5H13.125V1.25C13.125 1.08424 13.1909 0.925268 13.3081 0.808058C13.4253 0.690848 13.5842 0.625 13.75 0.625C13.9158 0.625 14.0747 0.690848 14.1919 0.808058C14.3092 0.925268 14.375 1.08424 14.375 1.25V2.5H15.625C15.7908 2.5 15.9497 2.56585 16.0669 2.68306C16.1842 2.80027 16.25 2.95924 16.25 3.125C16.25 3.29076 16.1842 3.44973 16.0669 3.56694C15.9497 3.68415 15.7908 3.75 15.625 3.75H14.375V5C14.375 5.16576 14.3092 5.32473 14.1919 5.44194C14.0747 5.55915 13.9158 5.625 13.75 5.625C13.5842 5.625 13.4253 5.55915 13.3081 5.44194C13.1909 5.32473 13.125 5.16576 13.125 5V3.75H11.875C11.7092 3.75 11.5503 3.68415 11.4331 3.56694C11.3159 3.44973 11.25 3.29076 11.25 3.125ZM19.375 6.875C19.375 7.04076 19.3092 7.19973 19.1919 7.31694C19.0747 7.43415 18.9158 7.5 18.75 7.5H18.125V8.125C18.125 8.29076 18.0592 8.44973 17.9419 8.56694C17.8247 8.68415 17.6658 8.75 17.5 8.75C17.3342 8.75 17.1753 8.68415 17.0581 8.56694C16.9409 8.44973 16.875 8.29076 16.875 8.125V7.5H16.25C16.0842 7.5 15.9253 7.43415 15.8081 7.31694C15.6909 7.19973 15.625 7.04076 15.625 6.875C15.625 6.70924 15.6909 6.55027 15.8081 6.43306C15.9253 6.31585 16.0842 6.25 16.25 6.25H16.875V5.625C16.875 5.45924 16.9409 5.30027 17.0581 5.18306C17.1753 5.06585 17.3342 5 17.5 5C17.6658 5 17.8247 5.06585 17.9419 5.18306C18.0592 5.30027 18.125 5.45924 18.125 5.625V6.25H18.75C18.9158 6.25 19.0747 6.31585 19.1919 6.43306C19.3092 6.55027 19.375 6.70924 19.375 6.875Z"
              fill="#00C16A" />
          </svg>

          <span class=" text-border-brand font-semibold leading-[18.20px] text-sm">
            App Components
          </span>
        </div>
      </div>
      <div class="flex items-center gap-6 max-lg:pr-5">
        <!-- SELECTED COMPONENT INDICATOR -->
        <div class="w-[1px] bg-black/25 h-[468px] relative">
          <div :style="{
      top: `${30 +
        appComponents?.findIndex(
          (item) => activeComponent.title === item.title
        ) *
        65
        }px`,
    }" class="w-[4px] bg-white h-[148px] rounded-xl absolute left-0 right-0 translate-x-[-40%] transition-all">
          </div>
        </div>
        <!-- COMPONENT TITLES -->
        <div>

          <div v-for="item in appComponents" @click="() => activeComponent = item" :key="item.title" :class="'rounded-2xl transition-all duration-300 cursor-pointer ' + (activeComponent.title === item.title ? 'bg-white p-6 max-h-[200px]' : 'bg-transparent max-h-[65px] overflow-hidden hover:bg-[#0C8B52] p-5')
      ">
            <h3 :class="'font-bold text-2xl mb-2 ' + (activeComponent.title === item.title ? '' : ' text-white')">
              {{ item.title }}
            </h3>
            <p class="mb-1 text-sm text-gray-400">
              {{ item.description }}
            </p>
            <InternalLink :href="item.docsLink" class="text-sm font-normal">
              See in the Docs
            </InternalLink>
          </div>

        </div>
      </div>
      <div class="mt-5 max-lg:mb-5">
        <span class="text-sm text-white max-lg:text-base">
          And many more landing page sections.
          <InternalLink href="/docs/components/hero" className="text-white">
            Discover now!
          </InternalLink>
        </span>
      </div>
    </div>
    <div class="basis-[60%] min-h-[650px] max-lg:basis-[100%] max-lg:w-full max-lg:h-[600px] max-sm:pb-6">
      <div class="flex items-center justify-center w-full h-full max-lg:h-[600px]">
        <div id="canvas-showcase-wrapper"
          class="w-[90%] h-[90%] rounded-2xl flex justify-center items-center bg-white relative overflow-hidden">

          <div v-if="activeComponent.title === 'Canvas'" :style="{
      boxShadow:
        '0px 43.636px 43.636px 0px rgba(115, 115, 115, 0.16)',
    }" class="rounded-2xl">
            <ClientOnly>
              <LandingComponentsAppComponentsShowcaseCanvasShowcase />
            </ClientOnly>
          </div>

          <div v-if="activeComponent.title === 'Prompt Input'" class="flex w-full p-2 ml-3 mr-3 bg-white rounded-xl"
            :style="{
      boxShadow: '0px 43.636px 43.636px 0px rgba(115, 115, 115, 0.16)',
    }">
            <ClientOnly>
              <LandingComponentsAppComponentsShowcasePromptBoxShowcase />
            </ClientOnly>
          </div>
          <AppAnimatedTabs v-if="activeComponent.title === 'Animated Tabs'" v-model="selectedOption" :options="options"
            subContainerClassName="bg-[#F8FAFC]" />

          <div v-if="activeComponent.title === 'Stepper'" class="w-[90%] flex flex-col gap-5 items-center">
            <div :style="{
      boxShadow:
        '0px 43.636px 43.636px 0px rgba(115, 115, 115, 0.16)',
    }" class="w-full overflow-hidden rounded-xl">
              <AppStepper :activeStep="activeStep" :stepOptions="stepOptions" />
            </div>
            <BaseNSButton @click="changeStep" variant="brand" size="lg" class="max-[567px]:w-full">
              <template #prefix>
                <PhSparkle weight="duotone" class="w-5 h-5" />
              </template>
              Next Step
            </BaseNSButton>
          </div>


          <div v-if="activeComponent.title === 'Font Selector'"
            class="w-[80%] flex items-center gap-10 max-sm:flex-col">
            <div class=" basis-[300px]" :style="{
      boxShadow:
        '0px 43.636px 43.636px 0px rgba(115, 115, 115, 0.16)',
    }">
              <AppFontSelector v-model="selectedFont" />
            </div>
            <div class="flex justify-center flex-grow max-sm:mb-5">
              <span id="font-display" class="text-4xl font-bold text-center">
                Nuxt Starter
              </span>
            </div>
          </div>


          <template v-if="activeComponent.tryMePlacement === 'right'">
            <div
              class="absolute max-sm:top-2 max-sm:ml-4 sm:top-[42%] sm:transform-y[-50%] sm:right-[-25px] flex flex-col">
              <span class="relative z-[1] block text-xl tracking-widest sm:-rotate-90 text-border-brand">
                TRY ME
              </span>
              <client-only>
                <Vue3Lottie style="width: 150px; height: 150px; left: 10px;"
                  animationLink="/assets/lottie/green-pulse-lottie-1.json"
                  class="w-[400px] h-[400px] absolute top-0 left-0 right-0 max-sm:-translate-x-[32%] max-sm:-translate-y-[54%] sm:translate-x-[-18%] sm:translate-y-[-34%] z-0" />
              </client-only>
            </div>
            <div
              class="absolute max-sm:-rotate-90 max-sm:top-2 max-sm:left-[34%] sm:top-[55%] sm:translate-y-[-50%] sm:right-[7px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" d="M10.5 5.25L10.5 18.75L3.75 12L10.5 5.25Z" fill="#00C16A" />
                <path
                  d="M9.96935 4.71927L3.21935 11.4693C3.14962 11.5389 3.0943 11.6216 3.05656 11.7127C3.01882 11.8037 2.99939 11.9013 2.99939 11.9999C2.99939 12.0985 3.01882 12.1961 3.05656 12.2871C3.0943 12.3782 3.14962 12.4609 3.21935 12.5305L9.96935 19.2805C10.0742 19.3855 10.2079 19.4571 10.3535 19.486C10.4991 19.515 10.65 19.5002 10.7871 19.4434C10.9242 19.3865 11.0414 19.2903 11.1238 19.1669C11.2062 19.0434 11.2501 18.8983 11.25 18.7499L11.25 12.7499L20.25 12.7499C20.4489 12.7499 20.6397 12.6709 20.7803 12.5302C20.921 12.3896 21 12.1988 21 11.9999C21 11.801 20.921 11.6102 20.7803 11.4696C20.6397 11.3289 20.4489 11.2499 20.25 11.2499L11.25 11.2499L11.25 5.2499C11.2501 5.10147 11.2062 4.95635 11.1238 4.83291C11.0414 4.70946 10.9242 4.61324 10.7871 4.55643C10.65 4.49962 10.4991 4.48476 10.3535 4.51375C10.2079 4.54274 10.0742 4.61426 9.96935 4.71927ZM9.74998 16.9396L4.81029 11.9999L9.74998 7.06021L9.74998 16.9396Z"
                  fill="#00C16A" />
              </svg>
            </div>
          </template>


          <div v-if="activeComponent?.tryMePlacement === 'bottom'"
            class="absolute bottom-2 left-[50x%] flex items-center">
            <svg class="relative z-10 rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none">
              <path opacity="0.2" d="M10.5 5.25L10.5 18.75L3.75 12L10.5 5.25Z" fill="#00C16A" />
              <path
                d="M9.96935 4.71927L3.21935 11.4693C3.14962 11.5389 3.0943 11.6216 3.05656 11.7127C3.01882 11.8037 2.99939 11.9013 2.99939 11.9999C2.99939 12.0985 3.01882 12.1961 3.05656 12.2871C3.0943 12.3782 3.14962 12.4609 3.21935 12.5305L9.96935 19.2805C10.0742 19.3855 10.2079 19.4571 10.3535 19.486C10.4991 19.515 10.65 19.5002 10.7871 19.4434C10.9242 19.3865 11.0414 19.2903 11.1238 19.1669C11.2062 19.0434 11.2501 18.8983 11.25 18.7499L11.25 12.7499L20.25 12.7499C20.4489 12.7499 20.6397 12.6709 20.7803 12.5302C20.921 12.3896 21 12.1988 21 11.9999C21 11.801 20.921 11.6102 20.7803 11.4696C20.6397 11.3289 20.4489 11.2499 20.25 11.2499L11.25 11.2499L11.25 5.2499C11.2501 5.10147 11.2062 4.95635 11.1238 4.83291C11.0414 4.70946 10.9242 4.61324 10.7871 4.55643C10.65 4.49962 10.4991 4.48476 10.3535 4.51375C10.2079 4.54274 10.0742 4.61426 9.96935 4.71927ZM9.74998 16.9396L4.81029 11.9999L9.74998 7.06021L9.74998 16.9396Z"
                fill="#00C16A" />
            </svg>
            <span class="relative z-10 block text-xl tracking-widest text-border-brand">
              TRY ME
            </span>
            <client-only>
              <Vue3Lottie style="width: 150px; height: 150px; top: 15px;"
                animationLink="/assets/lottie/green-pulse-lottie-1.json"
                class="w-[200px] h-[200px] absolute top-0 left-0 right-0 translate-x-[-18%] translate-y-[-34%] z-0" />
            </client-only>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="tsx" setup>
import { ref } from "vue";
import { type Step } from "@/components/app/Stepper/types";
import { Vue3Lottie } from 'vue3-lottie'
import InternalLink from "@/components/base/InternalLink/InternalLink.vue";
import { PhSparkle } from "@phosphor-icons/vue";
import FontFaceObserver from "fontfaceobserver";

interface AppComponentsShowcaseProps {
  topIndicatorText?: string;
}

type AppComponentTypes =
  | "Canvas"
  | "Prompt Input"
  | "Animated Tabs"
  | "Stepper"
  | "Font Selector";

interface AppComponentItem {
  title: AppComponentTypes;
  description: string;
  docsLink: string;
  tryMePlacement: "right" | "bottom";
}

const appComponents: AppComponentItem[] = [
  {
    title: "Canvas",
    description:
      "Implement a flexible Nuxt Starter AI canvas component in seconds for getting sketch and uploaded image inputs! 🎨",
    docsLink: "/docs/components/canvas",
    tryMePlacement: "right",
  },
  {
    title: "Prompt Input",
    description:
      "Utilize our customizable Nuxt Starter AI prompt input component with your AI Apps! Customize each section to your exact needs in seconds! 🚀",
    docsLink: "/docs/components/prompt-input",
    tryMePlacement: "bottom",
  },
  {
    title: "Animated Tabs",
    description:
      "Implement Nuxt Starter AI animated tabs component to let your users jump between sections, adding a playful touch to make navigation a breeze! 🌊",
    docsLink: "/docs/components/animated-tabs",
    tryMePlacement: "bottom",
  },
  {
    title: "Stepper",
    description:
      "Highly customizable Nuxt Starter AI stepper component for highlighting the active step in an app's user interface. Widely used in stepper forms etc.",
    docsLink: "/docs/components/stepper",
    tryMePlacement: "bottom",
  },
  {
    title: "Font Selector",
    description:
      "With Nuxt Starter AI font picker, let your users choose from +4300 fonts each displayed in its own style.",
    docsLink: "/docs/components/font-selector",
    tryMePlacement: "bottom",
  },
];

const options = [
  {
    label: "Payments",
    value: "payments",
  },
  {
    label: "Authentication",
    value: "authentication",
  },
  {
    label: "SEO",
    value: "seo",
  },
  {
    label: "AI",
    value: "ai",
  },
];

const stepOptions: Step[] = [
  {
    label: "Step 1",
    value: "step-1",
  },
  {
    label: "Step 2",
    value: "step-2",
  },
  {
    label: "Step 3",
    value: "step-3",
  },
];
const activeStep = ref(stepOptions[0]);
const changeStep = () => {
  const index = stepOptions.findIndex(step => step.value === activeStep.value.value);
  activeStep.value = stepOptions[(index + 1) % stepOptions.length]
};

const activeComponent = ref<AppComponentItem>(
  appComponents?.[0]
);

const selectedOption = ref(options[0]);
const selectedFont = ref('');

watch(() => selectedFont.value, (fontFamily) => {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>@import url('https://fonts.googleapis.com/css?family=${fontFamily}');</style>`
  );
  var font = new FontFaceObserver(fontFamily);
  font.load().then(() => {
    const fontElement = document.getElementById("font-display");
    if (fontElement != null) {
      fontElement.style.fontFamily = fontFamily;
    }
  });
});
</script>
