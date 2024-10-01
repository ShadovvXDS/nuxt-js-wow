import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/content',
    // You need to comment this out to include GTM and also enter your GTM ID below inside gtm field.
    // '@zadigetvoltaire/nuxt-gtm',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // Here you need to enter your GTM ID.
  // gtm: {
  //   id: 'GTM-xxxxxx'
  // },
  content: {
    // Options
  },
  image: {
    // Options
  },
  supabase: {
    // Options
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirect: false,
  }
})
