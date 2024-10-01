<template>
    <a :href="href" target="_blank" :rel="follow ? '' : 'noopener noreferrer'">
      <span class="underline text-primary">
        <slot></slot>
      </span>
    </a>
</template>

<script lang="tsx" setup>
  import { type ExternalLinkProps } from "./types";
  const props = defineProps<ExternalLinkProps>();
  const { follow, href } = props;

</script>
