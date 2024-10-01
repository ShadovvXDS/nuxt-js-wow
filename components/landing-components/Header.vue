<template>
  <header :class="{
    ' bg-white fixed top-0 right-0 left-0 z-30 transition-all': true,
    'right-[15%] left-[15%] top-[24px] rounded-2xl border-[1px] border-border-disabled': isScrolled
  }">
    <nav class="container flex items-center justify-between px-8 py-4 mx-auto max-sm:px-3" aria-label="Global">
      <!-- Your logo/name on large screens -->
      <div class="flex lg:flex-1">
        <NuxtLink class="flex items-center gap-2 shrink-0 " to="/">

          <NuxtImg format="webp" src="/assets/nuxt-starter-ai-h.png" :alt="`${config.appName} logo`" class="w-8"
            width="430" height="85" :style="{ width: '180px' }" />
        </NuxtLink>
      </div>
      <!-- Burger button to open menu on mobile -->
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="() => isOpen = true">
          <span class="sr-only">Open main menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="w-6 h-6 text-base-content">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <!-- Your links on large screens -->
      <div class="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">

        <NuxtLink v-for="(link) in links" :key="link.label" :href="link.href" class="text-lg link link-hover">
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- CTA on large screens -->
      <div class="hidden lg:flex lg:justify-end lg:flex-1">
        <ButtonSignin />
      </div>
    </nav>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="{ 'relative z-50': true, 'hidden': !isOpen }">
      <div
        class="fixed inset-y-0 right-0 z-10 w-full px-3 py-4 overflow-y-auto transition duration-300 ease-in-out origin-right transform bg-white sm:max-w-sm sm:ring-1 sm:ring-neutral/10">
        <!-- Your logo/name on small screens -->
        <div class="flex items-center justify-between">
          <NuxtLink class="flex items-center gap-2 shrink-0 " to="/">
            <NuxtImg format="webp" src="/assets/next-starter-ai-h.png" :alt="`${config.appName} logo`" class="w-8"
              width="400" height="75" :style="{ width: '180px' }" :placeholder="[180, 75, 20, 5]" />

          </NuxtLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5" @click="() => isOpen = false">
            <span class="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Your links on small screens -->
        <div class="flow-root px-2 mt-6">
          <div class="py-4">
            <div class="flex flex-col items-start gap-y-4">

              <NuxtLink v-for="(link) in links" :href="link.href" :key="link.label" class="link link-hover">
                {{ link.label }}
              </NuxtLink>

            </div>
          </div>
          <div class="divider"></div>
          <!-- Your CTA on small screens -->
          <div class="flex flex-col">
            <ButtonSignin />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import config from "@/config";
import ButtonSignin from "@/components/landing-components/ButtonSignin/ButtonSignin.vue";

const isOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

// setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
)

const onScroll = (e: Event) => {
  const scrollY = window.scrollY;
  if (scrollY > 100) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  if (window?.scrollY > 100) {
    isScrolled.value = true;
  }


  document.addEventListener("scroll", onScroll);
})

onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
})

const links: {
  href: string;
  label: string;
}[] = [
    {
      href: "/#pricing",
      label: "Pricing",
    },
    {
      href: "/#testimonials",
      label: "Reviews",
    },
    {
      href: "/#faq",
      label: "FAQ",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ]

</script>

<style></style>