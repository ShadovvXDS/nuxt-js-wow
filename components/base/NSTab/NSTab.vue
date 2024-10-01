<template>
    <div class="flex w-full rounded-xs bg-surface-brand-subdued p-4xs gap-4xs"
        :class="{ 'flex-col': orientation === 'vertical', '!cursor-not-allowed': disabled }">
        <button v-for="option in options" :key="typeof option === 'object' ? option.id : option"
            @click="handleClick(option)"
            class="flex items-center justify-center flex-1 font-bold text-2xs px-4xs min-h-6 max-h-6 rounded-2xs gap-4xs"
            :class="[
            modelValue === (typeof option === 'object' ? option.id : option)
                ? disabled
                    ? '!bg-content-disabled text-content-invert [&>*]:fill-content-invert'
                    : 'text-content-invert [&>*]:fill-content-invert bg-surface-brand'
                : disabled
                    ? 'opacity-70 [&>*]:fill-content-primary'
                    : 'text-content-primary [&>*]:fill-content-primary hover:bg-surface-brand-hover',
            { '!cursor-not-allowed': disabled },
        ]" :disabled="disabled">
            {{ typeof option === 'object' ? option.label : option }}
        </button>
    </div>
</template>

<script setup lang="ts">
import type { NSTabProps, NSTabEmits } from './types';

const props = withDefaults(defineProps<NSTabProps>(), {
    orientation: 'horizontal',
});
const emit = defineEmits<NSTabEmits>();

const handleClick = (option: NSTabProps['options'][number]) => {
    if (!props.disabled) {
        emit('update:modelValue', typeof option === 'object' ? option.id : option);
    }
};
</script>