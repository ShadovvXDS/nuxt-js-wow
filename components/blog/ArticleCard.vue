<template>
  <article class="overflow-hidden card bg-[#f2f2f2] rounded-box">
    <NuxtLink v-if="article.thumbnail" :to="`/blog/${article.slug}`" class="link link-hover hover:link-primary"
      :title="article.title" rel="bookmark">
      <figure>
        <NuxtImg :src="article.thumbnail" :alt="article.title" :width="600" :height="338" :priority="isImagePriority"
          placeholder class="aspect-video object-center object-cover hover:scale-[1.03] duration-200 ease-in-out" />
      </figure>
    </NuxtLink>
    <div class="card-body">
      <!-- CATEGORIES -->

      <div class="flex flex-wrap gap-2">
        <BlogBadgeCategory v-for="category in article.categories" :category="category" :key="category" />
      </div>


      <!-- TITLE WITH RIGHT TAG -->
      <TitleTag class="mb-1 text-xl font-bold md:text-2xl">
        <NuxtLink :to="`/blog/${article.slug}`" class="link link-hover hover:link-primary" :title="article.title"
          rel="bookmark">
          {{ article.title }}
        </NuxtLink>
      </TitleTag>

      <div class="space-y-4 text-base-content/80">
        <!-- DESCRIPTION -->
        <p>{{ article.description }}</p>

        <!-- AUTHOR & DATE -->
        <div class="flex items-center gap-4 text-sm">
          <BlogAvatar :author="article.author" />

          <span itemProp="datePublished">
            {{ new Date(article.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
            }) }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { type articleType } from "@/pages/blog/constants"
interface CardArticleProps {
  article: articleType;
  isImagePriority?: boolean;
}
defineProps<CardArticleProps>();

</script>