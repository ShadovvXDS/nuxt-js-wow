<template>
    <NSDrawer dialogClass="w-[400px] bg-surface-primary" title="Keyboard Commands">
        <template #icon>
            <PhKeyboard weigth="duotone" class="w-5 h-5" />
        </template>
        <template #trigger>
            <button
                class="max-[1072px]:hidden w-10 h-10 flex items-center justify-center rounded-xs text-content-primary bg-surface-primary hover:bg-surface-brand-subdued active:bg-surface-brand-hover active:text-border-brand">
                <PhKeyboard weigth="duotone" class="w-5 h-5" />
            </button>
        </template>

        <div class="flex flex-col divide-y divide-border-disabled">
            <div v-for="{ name, hold, key } in shortcuts" :key="name"
                class="flex items-center justify-between hover:bg-surface-brand-subdued py-3xs">
                <span class="text-xs font-medium text-content-primary">
                    {{ name }}
                </span>
                <div class="flex text-xs font-medium gap-4xs">
                    <span v-if="hold" class="py-4xs px-3xs rounded-2xs bg-surface-secondary">
                        <PhArrowFatUp v-if="hold === 'shift'" class="w-4 h-4" />
                        <PhCommand v-else-if="isMac" class="w-4 h-4" />
                        <span v-else>CTRL</span>
                    </span>
                    <span class="py-4xs px-3xs rounded-2xs bg-surface-secondary">
                        <PhBackspace v-if="key === 'backspace'" class="w-4 h-4" />
                        <PhKeyReturn v-else-if="key === 'keyReturn'" class="w-4 h-4" />
                        <span v-else>{{ key }}</span>
                    </span>
                </div>
            </div>
        </div>
    </NSDrawer>
</template>
<script setup lang="ts">
import { PhArrowFatUp, PhKeyboard, PhCommand, PhBackspace, PhKeyReturn } from '@phosphor-icons/vue';
import { NSDrawer } from '~/components/base';
import { shortcuts } from './shortcuts';
const isMac = process.client && window.navigator.platform.includes("Mac");
</script>