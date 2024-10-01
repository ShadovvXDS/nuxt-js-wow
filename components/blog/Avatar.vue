<template>
    <NuxtLink :href="`/blog/author/${author?.slug}`" :title="`Posts by ${author?.name}`"
        class="inline-flex items-center gap-2 group" rel="author">
        <span itemProp="author">
            <NuxtImg v-if="author?.avatar" :src="author?.avatar" alt=""
                class="object-cover object-center rounded-full w-7 h-7" width="28" height="28" />
        </span>
        <span class="group-hover:underline">{{ author?.name }}</span>
    </NuxtLink>
</template>
<script setup lang="ts">
import { authors, type authorType } from '~/pages/blog/constants';

const props = defineProps<{
    author: string
}>()

const author = computed<authorType | undefined>(() => {
    return authors.find(row => row.slug === props.author);
})
</script>