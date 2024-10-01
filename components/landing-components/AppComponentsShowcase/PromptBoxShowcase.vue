<template>
    <PromptInput v-model:negative-prompt="negativePrompt" :prompt="prompt" @update:prompts="handleUpdatePrompts"
        class="max-[567px]:flex-col w-full" @click="handleClick" />
</template>
<script setup lang="ts">
import { PromptInput } from '@/components/app';

const negativePrompt = ref('');
const prompt = ref('');
const handleClick = () => alert("Generate clicked");
const handleUpdatePrompts = (prompts: { text: string; importance: number }[]) => console.log('prompts', prompts);
</script>