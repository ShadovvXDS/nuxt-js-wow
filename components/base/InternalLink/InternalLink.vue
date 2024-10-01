<template>
  <NuxtLink :href="href">
    <span :class="'underline text-primary' + (className || '')">
      <slot></slot>
    </span>
  </NuxtLink>
</template>

<script lang="tsx" setup>
  import { type InternalLinkProps } from "./types";
  const props = defineProps<InternalLinkProps>();
  const { className, href } = props;

</script>
