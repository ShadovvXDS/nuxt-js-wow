<template>
    <div class="relative flex flex-col gap-3 py-3 bg-white">
        <div class="mx-3">
            <NSInput v-model="query" placeholder="Search..." />
        </div>
        <div ref="parentRef" class="max-h-[272px] overflow-y-scroll no-scrollbar pl-3 overflow-x-hidden">
            <div class="grid grid-cols-7 gap-3"
                :style="{ height: `${rowVirtualizer.getTotalSize()}px`, width: '100%', position: 'relative' }">
                <template v-for="virtualRow in rowVirtualizer.getVirtualItems()">
                    <template v-for="virtualColumn in columnVirtualizer.getVirtualItems()">
                        <button v-if="virtualRow.index * 7 + virtualColumn.index < filteredIcons.length"
                            :key="`${virtualRow.index}-${virtualColumn.index}`"
                            :style="buttonStyle(virtualRow.index, virtualColumn.index)"
                            @click="selectIcon(virtualRow.index, virtualColumn.index)">
                            <img class="w-8 h-8 p-[5px]" :src="iconPath(virtualRow.index, virtualColumn.index)"
                                alt="" />
                        </button>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { NSInput } from '@/components/base';
import { faIcons } from '@/types/fa-icons';
import Fuse from 'fuse.js';

const emit = defineEmits(['select:icon']);

const query = ref('');
const parentRef = ref(null);

const filteredIcons = computed(() => {
    let icons = faIcons.filter((icon) => icon.c === "brands");

    if (query.value) {
        const fuse = new Fuse(icons, { keys: ['n'] });
        return fuse.search(query.value).map((result) => result.item);
    }

    return icons;
});

const rowVirtualizer = useVirtualizer({
    count: Math.ceil(filteredIcons.value.length / 7),
    getScrollElement: () => parentRef.value,
    estimateSize: () => 48,
    overscan: 5,
});

watch(() => filteredIcons.value.length, (newSize) => {
    rowVirtualizer.value.setOptions({
        ...rowVirtualizer.value.options,
        count: Math.ceil(newSize / 7),
    });
});

const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: 7,
    getScrollElement: () => parentRef.value,
    estimateSize: () => 48,
    overscan: 5,
});

function buttonStyle(rowIndex, columnIndex) {
    return {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '32px',
        height: '32px',
        transform: `translateX(${48 * columnIndex}px) translateY(${rowIndex * 48}px)`,
    };
}

function selectIcon(rowIndex, columnIndex) {
    const iconIndex = rowIndex * 7 + columnIndex;
    const icon = filteredIcons.value[iconIndex];
    emit('select:icon', `/assets/fa-icons${icon.p}`);
}

function iconPath(rowIndex, columnIndex) {
    const iconIndex = rowIndex * 7 + columnIndex;
    const icon = filteredIcons.value[iconIndex];
    return `/assets/fa-icons${icon.p}`;
}
</script>