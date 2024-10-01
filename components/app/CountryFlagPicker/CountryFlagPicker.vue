<template>
    <Popover class="relative w-full" v-slot="{ open }">
        <PopoverButton ref="referenceElement" class="full">
            <div class="flex items-center h-10 gap-4xs p-4xs ring-1 ring-border-disabled rounded-xs hover:bg-surface-brand-subdued"
                :class="modelValue ? 'bg-surface-brand-hover' : 'bg-surface-primary'">
                <PhFlag v-if="!modelValue" class="w-5 h-5" />
                <img v-else className="w-6 h-6" :src="countryFlag" alt="" />
                <p class="flex-1 text-xs font-medium text-left truncate text-content-primary text-ellipsis">
                    {{ modelValue ? modelValue : "Select a country" }}
                </p>
                <PhCaretRight class="w-4 h-4" />
            </div>
        </PopoverButton>
        <Transition enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <PopoverPanel :style="{
        position: strategy,
        top: floatingTop,
        left: floatingLeft,
    }" ref="floatingElement"
                class="absolute z-10 flex ml-1 border rounded-sm shadow-popover bg-surface-primary border-border-disabled py-2xs pl-2xs"
                v-slot="{ close }">
                <div class="flex flex-col bg-white">
                    <div className="flex items-center gap-3 mr-2xs">
                        <NSInput v-model="query" placeholder="Search a country..." />
                    </div>
                    <div ref="parentRef"
                        class="max-h-[272px] overflow-y-scroll no-scrollbar overflow-x-hidden bg-white mt-1">
                        <div :style="{
        height: `${virtualizer.getTotalSize()}px`, width: '100%', position: 'relative'
    }">
                            <button v-for="virtualRow in virtualizer.getVirtualItems() " :key="virtualRow.key" :style="{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '40px', transform: `translateY(${virtualRow.index * 48}px)`
    }" class="flex items-center w-full gap-3xs hover:bg-surface-brand-subdued rounded-xs p-3xs"
                                :class="filteredFlags[virtualRow.index].name === modelValue ? 'bg-surface-brand-hover' : 'bg-surface-primary'"
                                @click="() => handleFlagSelection(filteredFlags[virtualRow.index].name, close)">
                                <img class="w-6 h-6" :src="filteredFlags[virtualRow.index].image" />
                                <span class="flex-1 flex-grow text-sm text-left truncate text-ellipsis">
                                    {{ filteredFlags[virtualRow.index]?.name }}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </Transition>
    </Popover>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { useFloating } from '@floating-ui/vue';
import { PhCaretRight, PhFlag } from '@phosphor-icons/vue';
import type { CountryFlagPickerProps, CountryFlagPickerEmits } from './types';
import { countryFlags } from './country-flags';
import { NSInput } from '@/components/base';
import { useVirtualizer } from '@tanstack/vue-virtual';
import Fuse from 'fuse.js';

const props = defineProps<CountryFlagPickerProps>();
const emit = defineEmits<CountryFlagPickerEmits>();

const query = ref('');
const countryFlag = computed(() => {
    return countryFlags?.find((item) => item.name === props.modelValue)?.image;
});

const referenceElement = ref(null);
const floatingElement = ref(null);

const { x, y, strategy } = useFloating(referenceElement, floatingElement, {
    placement: 'top-start',
});

const floatingTop = computed(() => `${(y.value ?? 0) - 8}px`);
const floatingLeft = computed(() => `${x.value ?? 0}px`);

const parentRef = ref(null);
const filteredFlags = computed(() => {
    let flags = countryFlags;
    if (query.value) {
        const fuseOptions = {
            keys: ["name"],
        };

        const fuse = new Fuse(flags, fuseOptions);

        return fuse.search(query.value).map((q) => q.item);
    }
    return flags;
});

const virtualizer = useVirtualizer({
    count: filteredFlags.value.length,
    getScrollElement: () => parentRef.value,
    estimateSize: () => 48,
    overscan: 5,
});

watch(() => filteredFlags.value.length, (newSize) => {
    virtualizer.value.setOptions({
        ...virtualizer.value.options,
        count: newSize,
    });
});

const handleFlagSelection = (flag: string, close: () => void) => {
    if (flag === "None") {
        emit('update:modelValue', null);
    } else {
        emit('update:modelValue', flag);
    }
    close();
    // Resetting the query
    query.value = ''
}
</script>