<template>
  <footer class="mx-10 mb-10 bg-slate-50 rounded-2xl">
    <div class="px-8 py-24 mx-auto max-w-7xl">
      <div class="flex flex-col flex-wrap lg:items-start md:flex-row md:flex-nowrap">
        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <NuxtLink href="/" aria-current="page" class="flex items-center justify-center gap-2 md:justify-start">
            <NuxtImg src="/assets/nuxt-starter-ai-h.png" alt="`${config.appName} logo`" class="w-8" :width="300"
              :height="50" :style="{ width: '150px' }" />
          </NuxtLink>

          <p class="mt-3 text-sm text-base-content/80">
            {{ config.appDescription }}
          </p>
          <p class="mt-3 text-sm text-base-content/60">
            Copyright © {{ new Date().getFullYear() }} - All rights reserved
          </p>
        </div>
        <div class="flex flex-wrap justify-center flex-grow mt-10 -mb-10 text-center md:mt-0">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <div class="mb-3 text-sm font-semibold tracking-widest footer-title text-base-content md:text-left">
              LINKS
            </div>

            <div class="flex flex-col items-center justify-center gap-2 mb-10 text-sm md:items-start">
              <a v-if="config.mailgun.supportEmail" href="`mailto:${config.mailgun.supportEmail}`" target="_blank"
                class="link link-hover" aria-label="Contact Support">
                Support
              </a>
              <NuxtLink href="/#pricing" class="link link-hover">
                Pricing
              </NuxtLink>
              <NuxtLink href="/blog" class="link link-hover">
                Blog
              </NuxtLink>
              <!-- <a href="/#" target="_blank" class="link link-hover">
                  Affiliates
                </a> -->
            </div>
          </div>

          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <div class="mb-3 text-sm font-semibold tracking-widest footer-title text-base-content md:text-left">
              LEGAL
            </div>

            <div class="flex flex-col items-center justify-center gap-2 mb-10 text-sm md:items-start">
              <NuxtLink to="/tos" class="link link-hover">
                Terms of services
              </NuxtLink>
              <NuxtLink to="/privacy-policy" class="link link-hover">
                Privacy policy
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import config from "@/config"

</script>

<style></style>