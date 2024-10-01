<template>
    <main class="max-w-6xl min-h-screen p-8 mx-auto">
        <section class="max-w-3xl mx-auto mt-12 mb-24 text-center md:mb-32">
            <h1 class="mb-6 text-3xl font-extrabold tracking-tight lg:text-5xl md:mb-12">
                {{ category?.title }}
            </h1>
            <p class="max-w-xl mx-auto md:text-lg opacity-80">
                {{ category?.description }}
            </p>
        </section>

        <section class="mb-24">
            <h2 class="mb-8 text-2xl font-bold tracking-tight text-center lg:text-4xl md:mb-12">
                Most recent articles in {{ category?.title }}
            </h2>

            <div class="grid gap-8 lg:grid-cols-2">
                <ContentList :query="{
                    //draft: false,
                    sort: [
                        {
                            date: -1,
                        },
                    ],
                    where: [
                        {
                            categories: { $contains: slug },
                        }
                    ],
                }">
                    <template v-slot="{ list }">
                        <BlogArticleCard v-for="(article, i) in list" :article="article" :key="article.slug"
                            :isImagePriority="i <= 2" />
                    </template>
                    <template #not-found>

                    </template>

                </ContentList>
            </div>
        </section>
    </main>

</template>

<script lang="ts" setup>
import { categories } from '../constants';
const { slug } = useRoute().params;

const category = categories.find(c => c.slug === slug)
definePageMeta({
    layout: 'blog'
})
useHead({
    title: `${category?.title} Blogs | Nuxt Starter AI`,
    meta: [
        { name: 'description', content: category?.description }
    ],
    link: [
        {
            rel: 'canonical',
            href: `/blog/category/${slug}`,
        },
    ]
})
</script>