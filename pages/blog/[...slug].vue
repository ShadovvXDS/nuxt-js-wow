<template>
    <div class="h-[60px]" />
    <main class="max-w-6xl min-h-screen p-8 mx-auto">
        <div>
            <NuxtLink href="/blog"
                class="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
                title="Back to Blog">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fillRule="evenodd"
                        d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                        clipRule="evenodd" />
                </svg>
                Back to Blog
            </NuxtLink>
        </div>

        <article>
            <section class="my-12 md:my-20 max-w-[800px]">
                <div class="flex items-center gap-4 mb-6">
                    <BlogBadgeCategory v-for="category in doc.categories" :key="category" :category="category"
                        class="!badge-lg" />
                    <span class="text-base-content/80">
                        {{ formatDate(doc.date) }}
                    </span>
                </div>

                <h1 class="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl md:mb-8">
                    {{ doc.title }}
                </h1>

                <p class="text-base-content/80 md:text-lg max-w-[700px]">
                    {{ doc.description }}
                </p>
            </section>

            <div class="flex flex-col md:flex-row">
                <section
                    class="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-base-content/10">
                    <p class="mb-2 text-sm text-base-content/80 md:mb-3">
                        Posted by
                    </p>
                    <BlogAvatar :author="doc.author" />

                    <div class="hidden mt-12 md:block">
                        <p class="mb-2 text-sm text-base-content/80 md:mb-3">
                            Related reading
                        </p>
                        <div class="space-y-2 md:space-y-5">
                            <ContentQuery
                                :where="{ 'categories': { $containsAny: doc.categories }, slug: { $ne: doc.slug } }"
                                :limit="3" v-slot="{ data }">
                                <div v-for="article in data" :key="article.slug">
                                    <p class="mb-0.5">
                                        <NuxtLink :href="`/blog/${article.slug}`"
                                            class="font-medium link link-hover hover:link-primary"
                                            :title="article.title" rel="bookmark">
                                            {{ article.title }}
                                        </NuxtLink>
                                    </p>
                                    <p class="max-w-full text-sm text-base-content/80">
                                        {{ article.description }}
                                    </p>
                                </div>
                            </ContentQuery>

                        </div>
                    </div>
                </section>

                <section class="w-full space-y-6 md:pr-20">
                    <!-- Header  -->
                    <header>
                        <img v-if="doc.thumbnail" :src="doc.thumbnail" :alt="doc.title" class="w-full" />
                    </header>
                    <!-- ./ Header  -->

                    <!-- Content -->
                    <div class="p-5 mt-4 content">
                        <!-- Content  -->
                        <ContentRenderer :value="doc" />
                        <!-- ./ Content  -->
                    </div>
                    <!-- ./ Content  -->
                </section>
            </div>
        </article>
    </main>
</template>

<script lang="ts" setup>
const { slug } = useRoute().params;
const doc = await queryContent(`/${slug}`).findOne()

const formatDate = (date: any) => {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
definePageMeta({
    layout: 'blog'
})
useHead({
    title: `${doc.title} | Nuxt Starter AI`,
    meta: [
        { name: 'description', content: doc.description }
    ],
    link: [
        {
            rel: 'canonical',
            href: `/blog/${slug}`,
        },
    ]
})
</script>

<style>
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
    @apply mb-4;
}

.content h1 {
    @apply text-3xl font-bold;
}

.content h2 {
    @apply text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content;
}

.content h3 {
    @apply text-xl font-bold;
}

.content h4 {
    @apply text-lg font-bold;
}

.content h5 {
    @apply text-base font-bold;
}

.content img {
    @apply rounded-box;
}
</style>