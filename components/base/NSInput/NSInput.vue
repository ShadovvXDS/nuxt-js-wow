<template>
  <input v-model="valueProxy"
    class="text-content-primary text-xs font-medium bg-surface-primary ring-border-disabled rounded-xs placeholder:text-content-disabled ring-1 w-full h-9 px-3xs focus:ring-2 focus:ring-border-brand-alt !outline-none" />
</template>
<script setup lang="ts">
import type { InputProps, InputEmits } from './types';

const props = defineProps<InputProps>();
const emit = defineEmits<InputEmits>();

const valueProxy = computed({
  get: () => props.modelValue,
  set: (value: InputProps['modelValue']) =>
    emit('update:modelValue', value),
});
</script>