<template>
    <div class="w-full px-4 mx-auto lg:w-2/3 lg:px-0 lg: xl:w-1/2 max-[567px]:flex-col pt-60">
        <PromptInput v-model:negative-prompt="negativePrompt" :prompt="prompt" @update:prompts="handleUpdatePrompts"
            @click="handleClick" />
    </div>
    <div class="w-full px-4 mx-auto lg:w-2/3 lg:px-0 lg: xl:w-1/2 max-[567px]:flex-col pt-2">Negative Prompt: {{
            negativePrompt }}</div>
</template>
<script setup lang="ts">
import PromptInput from './PromptInput.vue';

const negativePrompt = ref('');
const prompt = ref('initial value');
const handleClick = () => alert("generate clicked");
const handleUpdatePrompts = (prompts: { text: string; importance: number }[]) => console.log('prompts', prompts);
</script>