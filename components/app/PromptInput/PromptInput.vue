<template>
    <div class="flex items-end gap-3 p-2 bg-white rounded-2xl">
        <div class="max-[1439px]:hidden">
            <NegativePromptButton v-model="negativePromptProxy" />
        </div>
        <div class="self-center flex-1 w-full pl-2 pr-3">
            <Prompt :prompt="prompt" @update:prompts="(e) => emit('update:prompts', e)" />
        </div>
        <NSButton variant="brand" size="lg" class="max-[567px]:w-full" @click="(e) => emit('click', e)">
            <template #prefix>
                <PhSparkle class="w-5 h-5" />
            </template>
            Generate
        </NSButton>
    </div>
</template>
<script setup lang="ts">
import type { PhSparkle } from '@phosphor-icons/vue';
import Prompt from './Prompt.vue';
import NegativePromptButton from './NegativePromptButton.vue';
import { NSButton } from '@/components/base';
import type { PromptInputEmits, PromptInputProps } from './types';

const props = defineProps<PromptInputProps>();
const emit = defineEmits<PromptInputEmits>();

const negativePromptProxy = computed({
    get: () => props.negativePrompt,
    set: (value: PromptInputProps['negativePrompt']) =>
        emit('update:negativePrompt', value),
});
</script>