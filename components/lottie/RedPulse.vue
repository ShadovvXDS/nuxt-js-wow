<template>

  <client-only>
    <Vue3Lottie animationLink="/assets/lottie/red-pulse-lottie.json"
      :class="className" />
  </client-only>

</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { Vue3Lottie } from 'vue3-lottie'

const props = defineProps({
  className: { type: String as PropType<string>, required: false },
});

const { className } = props;

</script>

<style></style>
