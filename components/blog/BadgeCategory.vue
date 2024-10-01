<template>
  <NuxtLink :href="`/blog/category/${category?.slug}`" class="badge badge-sm md:badge-md hover:badge-primary"
    :title="`Posts in ${category?.title}`" rel="tag">
    {{ category?.titleShort }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { categories, type categoryType } from '~/pages/blog/constants';

const props = defineProps<{
  category: string;
}>();
const category = computed<categoryType | undefined>(() => {
  return categories.find(category => category.slug === props.category);
})
</script>