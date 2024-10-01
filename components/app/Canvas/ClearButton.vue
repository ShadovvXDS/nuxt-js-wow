<template>
    <Popover class="relative" v-slot="{ open }">
        <PopoverButton ref="referenceElement" :class="[
        'p-2.5 hover:bg-surface-brand-hover rounded-r-xl focus:outline-none',
        { 'bg-surface-brand-hover [&>*]:fill-border-brand': open },
    ]">
            <PhBroom />
        </PopoverButton>
        <Transition name="fade" enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0">
            <PopoverPanel :style="{
        position: strategy,
        top: floatingTop,
        left: floatingLeft,
    }" ref="floatingElement" class="absolute z-10 flex" v-slot="{ close }">
                <div
                    class="flex flex-col gap-2xs p-2xs bg-surface-primary overflow-hidden rounded-sm shadow-popover ring-1 ring-border-disabled max-w-[196px] min-w-[196px]">
                    <span class="text-xs font-medium text-content-primary">
                        Are you sure you want to clear everything?
                    </span>
                    <div class="flex gap-2xs">
                        <NSButton variant="brand" size="sm" class="flex-1" outlined @click="close">
                            Cancel
                        </NSButton>
                        <NSButton variant="brand" size="sm" class="flex-1" @click="onClearAndClose(close)">
                            Clear
                        </NSButton>
                    </div>
                </div>
            </PopoverPanel>
        </Transition>
    </Popover>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { NSButton } from '@/components/base';
import { useFloating } from '@floating-ui/vue';
import { PhBroom } from '@phosphor-icons/vue';

const emit = defineEmits(['clear']);

const referenceElement = ref(null);
const floatingElement = ref(null);

const { x, y, strategy } = useFloating(referenceElement, floatingElement, {
    placement: 'top-start',
});

const floatingTop = computed(() => `${(y.value ?? 0) - 8}px`);
const floatingLeft = computed(() => `${x.value ?? 0}px`);

function onClearAndClose(close: Function) {
    emit('clear');
    close();
}
</script>