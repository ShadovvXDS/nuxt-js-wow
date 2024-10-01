<template>
    <Popover class="relative self-center" v-slot="{ open }">
        <PopoverButton ref="referenceElement"
            class="p-1.5 ring-1 ring-border-disabled rounded-xs bg-surface-disabled hover:bg-surface-brand-subdued active:bg-surface-brand-hover"
            :style="modelValue ? { 'backgroundColor': bgColor, 'color': 'white', } : {}">
            <PhEyedropper class="w-5 h-5 cursor-pointer bg-blend-difference" />
        </PopoverButton>
        <Transition enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <PopoverPanel :style="{
        position: strategy,
        top: floatingTop,
        left: floatingLeft,
    }" ref="floatingElement" class="absolute z-10 flex ml-2" v-slot="{ close }">
                <div
                    class="overflow-hidden rounded-sm shadow-popover ring-1 ring-border-disabled max-w-[216px] min-w-[216px]">

                    <div
                        class="relative grid grid-cols-2 gap-2 p-2xs bg-surface-primary max-h-[336px] overflow-y-scroll">
                        <button v-for="color in solidColors" :key="color.name"
                            class="w-full h-8 font-bold truncate rounded-xs text-2xs disabled:cursor-not-allowed px-3xs py-4xs text-ellipsis"
                            :class="[color.name.length ? 'hover:opacity-90'
        : 'border border-black hover:!bg-surface-brand-subdued', color.name === modelValue
        ? 'border-2 border-border-invert' : '']" :style="{
        backgroundColor:
            color.hex,
    }" @click="() => {
        emit('update:modelValue', color.name);
        close();
    }" :disabled="!allowEmpty && !color.name">
                            <span className="text-white mix-blend-difference">
                                {{ color.name.length ? color.name : "Not Specified" }}
                            </span>
                        </button>
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
import { PhEyedropper } from '@phosphor-icons/vue';
import type { ColorPickerProps, ColorPickerEmits } from './types';
import { solidColors } from './solid-colors';

const props = defineProps<ColorPickerProps>();
const emit = defineEmits<ColorPickerEmits>();

const bgColor = computed(() => {
    return solidColors.find((c) => c.name === props.modelValue)?.hex;
});

const referenceElement = ref(null);
const floatingElement = ref(null);

const { x, y, strategy } = useFloating(referenceElement, floatingElement, {
    placement: 'top-start',
});

const floatingTop = computed(() => `${(y.value ?? 0) - 8}px`);
const floatingLeft = computed(() => `${x.value ?? 0}px`);
</script>