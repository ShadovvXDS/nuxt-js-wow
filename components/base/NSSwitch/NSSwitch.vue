<template>
  <div class="flex items-center gap-3xs" :class="{ 'text-content-secondary': disabled }">
    <span v-if="label && size === 'sm'" class="text-xs font-medium">{{ label }}</span>
    <span v-else-if="label && size === 'lg'" class="text-sm">{{ label }}</span>
    <Switch v-model="valueProxy" :class="[
    sizeClasses,
    valueProxy ? 'bg-surface-brand' : 'bg-surface-disabled ring-1 ring-border-disabled',
    'group relative inline-flex items-center rounded-full active:opacity-80 disabled:opacity-100 disabled:bg-surface-disabled disabled:cursor-not-allowed'
  ]" :disabled="disabled">
      <span :class="[
    sizeClassesChild,
    valueProxy
      ? size === 'sm' ? 'translate-x-[19px] bg-white' : 'translate-x-[24px] bg-white'
      : size === 'sm' ? 'translate-x-[3px] bg-surface-invert-secondary' : 'translate-x-1 bg-surface-invert-secondary',
    'inline-block transform rounded-full bg-white transition group-disabled:bg-surface-primary group-active:ring-surface-press group-active:ring-[9px] group-disabled:ring-0'
  ]">
        <template v-if="size === 'lg'">
          <PhCheck v-if="valueProxy" class="w-full h-full p-1 text-content-brand group-disabled:text-border-disabled" />
          <PhX v-else class="w-full h-full p-1 text-content-invert group-disabled:text-border-disabled" />
        </template>
      </span>
    </Switch>
  </div>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { computed } from 'vue'
import type { NSSwitchEmits, NSSwitchProps } from './types';
import { PhCheck, PhX } from '@phosphor-icons/vue';

const props = withDefaults(defineProps<NSSwitchProps>(), {
  size: 'sm',
});
const emit = defineEmits<NSSwitchEmits>();

const valueProxy = computed({
  get: () => props.modelValue,
  set: (value: NSSwitchProps['modelValue']) =>
    emit('update:modelValue', value),
});

const sizeClasses = computed(() => {
  return props.size === 'sm' ? 'h-[20px] w-9' : 'h-[32px] w-[52px]'
})

const sizeClassesChild = computed(() => {
  return props.size === 'sm' ? 'h-[14px] w-[14px]' : 'h-6 w-6'
})
</script>
