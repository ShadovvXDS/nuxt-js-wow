<template>
  <item />
</template>

<script lang="tsx" setup>
import { defineProps } from 'vue';

const props = defineProps<{item: VNode}>()
const { item } = props;

</script>

<style>

</style>