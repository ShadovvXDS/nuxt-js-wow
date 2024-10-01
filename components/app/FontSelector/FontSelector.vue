<template>
    <div class="relative flex flex-col gap-3 py-3 bg-white">
        <div class="flex flex-wrap gap-2 mx-3">
            <button v-for="category in fontCategories" :key="category"
                :class="['rounded p-1 text-2xs font-bold flex gap-1 items-center capitalize', selectedFontCategories.includes(category) ? 'bg-surface-brand text-content-on-brand' : 'bg-surface-secondary text-content-primary']"
                @click="toggleCategory(category)">
                <svg v-if="selectedFontCategories.includes(category)" xmlns="http://www.w3.org/2000/svg" width="12"
                    height="12" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M10.8979 3.77299L4.89795 9.77299C4.84569 9.82543 4.78359 9.86704 4.71522 9.89543C4.64685 9.92382 4.57354 9.93843 4.49951 9.93843C4.42548 9.93843 4.35217 9.92382 4.2838 9.89543C4.21543 9.86704 4.15333 9.82543 4.10107 9.77299L1.47607 7.14799C1.42375 7.09566 1.38224 7.03355 1.35393 6.96518C1.32561 6.89682 1.31104 6.82355 1.31104 6.74955C1.31104 6.67555 1.32561 6.60228 1.35393 6.53392C1.38224 6.46555 1.42375 6.40344 1.47607 6.35111C1.5284 6.29879 1.59051 6.25728 1.65888 6.22897C1.72724 6.20065 1.80051 6.18607 1.87451 6.18607C1.94851 6.18607 2.02178 6.20065 2.09014 6.22897C2.15851 6.25728 2.22062 6.29879 2.27295 6.35111L4.49998 8.57814L10.102 2.97705C10.2077 2.87138 10.351 2.81201 10.5004 2.81201C10.6499 2.81201 10.7932 2.87138 10.8989 2.97705C11.0046 3.08272 11.0639 3.22604 11.0639 3.37549C11.0639 3.52493 11.0046 3.66825 10.8989 3.77393L10.8979 3.77299Z"
                        fill="white" />
                </svg>
                {{ category }}
            </button>
        </div>
        <div class="mx-3">
            <NSInput v-model="query" placeholder="Search..." />
        </div>
        <div ref="parentRef" class="max-h-[192px] h-[192px] overflow-y-scroll no-scrollbar pl-3 overflow-x-hidden">
            <div class="flex flex-col" :style="{ height: `${totalHeight}px`, width: '100%', position: 'relative' }">
                <button v-for="virtualRow in virtualizer.getVirtualItems() " :key="virtualRow.key"
                    :style="{ transform: `translateY(${virtualRow.index * 32}px)` }"
                    class="absolute top-0 left-0 w-full h-8 border-b-[1px] border-[#F5F7F9] hover:bg-surface-brand-subdued rounded-xs"
                    :class="{ 'bg-surface-brand-hover': filteredFonts[virtualRow.index].family === valueProxy }"
                    @click="valueProxy = filteredFonts[virtualRow.index].family">
                    <img class="h-3 m-auto" :src="filteredFonts[virtualRow.index].img_url" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { NSInput } from '@/components/base';
import type { FontSelectorEmits, FontSelectorProps } from './types';
import { googleFonts } from '~/types/google-fonts';
import { useVirtualizer } from '@tanstack/vue-virtual';
import Fuse from 'fuse.js';
const props = defineProps<FontSelectorProps>();
const emit = defineEmits<FontSelectorEmits>();

const valueProxy = computed({
    get: () => props.modelValue,
    set: (value: FontSelectorProps['modelValue']) =>
        emit('update:modelValue', value),
});

const parentRef = ref(null);
const selectedFontCategories = ref(['sans-serif']);
const query = ref('');
const fontCategories = ['sans-serif', 'serif', 'handwriting', 'display', 'monospace'];

const toggleCategory = (category: string) => {
    if (selectedFontCategories.value.includes(category)) {
        selectedFontCategories.value = selectedFontCategories.value.filter((i) => i !== category)
    } else {
        selectedFontCategories.value.push(category);
    }
};

const filteredFonts = computed(() => {
    let fonts = selectedFontCategories.value.length
        ? googleFonts.filter((f) => selectedFontCategories.value.includes(f.category))
        : googleFonts;
    if (query.value) {
        const fuseOptions = {
            keys: ["family"],
        };

        const fuse = new Fuse(fonts, fuseOptions);

        return fuse.search(query.value).map((q) => q.item);
    }
    return fonts;
});

const virtualizer = useVirtualizer({
    count: filteredFonts.value.length,
    getScrollElement: () => parentRef.value,
    estimateSize: () => 32,
    overscan: 5,
});

watch(() => filteredFonts.value.length, (newSize) => {
    virtualizer.value.setOptions({
        ...virtualizer.value.options,
        count: newSize,
    });
});


const totalHeight = computed(() => filteredFonts.value.length * 32);
</script>