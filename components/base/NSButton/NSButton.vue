<template>
  <button :class="[
    'flex justify-center items-center hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none',
    sizeClasses,
    variantClasses
  ]" :disabled="disabled">
    <header v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </header>
    <span class="px-4xs">
      <slot />
    </span>
    <footer v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </footer>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from 'vue';
import { type ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'brand',
  size: 'lg',
  outlined: false,
  disabled: false,
});

const { variant, size, outlined, disabled } = toRefs(props);

const sizeClasses = computed(() => {
  switch (size.value) {
    case 'sm':
      return 'h-9 text-xs font-medium rounded-xs px-3';
    case 'md':
      return 'h-11 text-sm font-medium rounded-xs px-3';
    case 'lg':
      return 'h-11 text-base font-medium rounded-sm px-xs';
  }
});

const variantClasses = computed(() => {
  if (!outlined.value) {
    switch (variant.value) {
      case "brand":
        return "text-content-on-brand bg-surface-brand";
      case "danger":
        return "text-content-on-error bg-surface-error";
      case "success":
        return "text-content-on-success bg-surface-success";
      case "warning":
        return "text-content-on-warning bg-surface-warning hover:!opacity-80 active:!opacity-[65]";
      case "neutral":
        return "text-content-invert bg-surface-invert";
      case "invert":
        return "text-content-primary bg-surface-primary hover:bg-surface-hover hover:!opacity-[97] active:bg-surface-press active:!opacity-[95]";
    }
  } else {
    switch (variant.value) {
      case "brand":
        return "text-surface-brand border border-content-brand hover:bg-surface-brand-hover hover:!opacity-[95] active:bg-surface-brand-press active:!opacity-[90]";
      case "danger":
        return "text-content-error border border-border-error hover:bg-surface-error-hover hover:!opacity-[90] active:bg-surface-error-press active:!opacity-[85]";
      case "success":
        return "text-content-success border border-border-success hover:bg-surface-success-hover hover:!opacity-[90] active:bg-surface-success-press active:!opacity-[85]";
      case "warning":
        return "text-content-warning border border-border-warning hover:bg-surface-warning-hover hover:!opacity-[90] active:bg-surface-warning-press active:!opacity-[85]";
      case "neutral":
        return "text-content-primary border border-border-secondary hover:bg-surface-hover hover:!opacity-[97] active:bg-surface-press active:!opacity-[95]";
      case "invert":
        return "text-content-invert border border-border-invert hover:bg-surface-invert-hover hover:!opacity-[85] active:bg-surface-invert-press active:!opacity-[75]";
    }
  }
});
</script>