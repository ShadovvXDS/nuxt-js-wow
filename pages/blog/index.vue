<template>
  <main class="max-w-6xl min-h-screen p-8 mx-auto">
    <section class="max-w-xl mx-auto mt-12 mb-24 text-center md:mb-32">
      <h1 class="mb-6 text-3xl font-extrabold tracking-tight lg:text-5xl">
        The {{ config.appName }} Blog
      </h1>
      <p class="text-lg leading-relaxed opacity-80">
        The Nuxt.js template includes everything you need to build your startup, AI tool, or any web application. It
        enables you to quickly generate your first $$$ online!
      </p>
    </section>

    <section class="grid gap-8 mb-24 lg:grid-cols-2 md:mb-32">
      <ContentList :query="{
          //draft: false,
          sort: [
            {
              date: -1,
            },
          ],
        }" v-slot="{ list }">

        <BlogArticleCard v-for="(article, i) in list" :article="article" :key="article.slug"
          :isImagePriority="i <= 2" />

      </ContentList>

    </section>
  </main>
</template>

<script lang="ts" setup>
import config from "@/config";
definePageMeta({
  layout: 'blog'
})
useHead({
  title: 'Blog | Nuxt Starter AI',
  meta: [
    { name: 'description', content: 'Learn how to use Nuxt Starter AI for creating your SaaS and start making money!' }
  ],
  link: [
    {
      rel: 'canonical',
      href: '/blog',
    },
  ]
})
</script>