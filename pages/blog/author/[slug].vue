<template>
    <main class="max-w-6xl min-h-screen p-8 mx-auto">
        <div class="h-[60px]" />
        <section class="flex flex-col max-w-3xl gap-8 mx-auto mt-12 mb-24 md:flex-row md:mb-32">
            <div>
                <p class="mb-2 text-xs tracking-wide uppercase text-base-content/80">
                    Authors
                </p>
                <h1 class="mb-2 text-3xl font-extrabold tracking-tight lg:text-5xl">
                    {{ author?.name }}
                </h1>
                <p class="mb-6 font-medium md:text-lg md:mb-10">{{ author?.job }}</p>
                <p class="md:text-lg text-base-content/80">
                    {{ author?.description }}
                </p>
            </div>

            <div class="flex gap-4 max-md:order-first md:flex-col shrink-0">
                <NuxtImg :src="author?.avatar" width="256" height="256" :alt="author?.name" priority
                    class="rounded-box w-[12rem] md:w-[16rem] " />
            </div>
        </section>

        <section>
            <h2 class="mb-8 text-2xl font-bold tracking-tight text-center lg:text-4xl md:mb-12">
                Most recent articles by {{ author?.name }}
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
                                author: slug,
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
import { authors } from '../constants';
const { slug } = useRoute().params;

const author = authors.find(c => c.slug === slug)
definePageMeta({
    layout: 'blog'
})
useHead({
    title: `${author?.name} Blogs | Nuxt Starter AI`,
    meta: [
        { name: 'description', content: author?.description }
    ],
    link: [
        {
            rel: 'canonical',
            href: `/blog/author/${slug}`,
        },
    ]
})
</script>