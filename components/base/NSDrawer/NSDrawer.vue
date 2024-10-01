<template>
  <div class="cursor-pointer" @click="isOpen = true">
    <slot name="trigger" />
  </div>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog class="relative z-10" :class="dialogClass" @close="onClose">
      <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
        leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
        <div class="fixed inset-0 bg-black/25" @click="onOverlayClick" />
      </TransitionChild>
      <div class="fixed inset-0 ml-auto overflow-x-hidden max-w-fit">
        <div class="flex items-center justify-end min-h-full">

          <TransitionChild as="template" enter="transform transition ease-in-out duration-500"
            enter-from="translate-x-full" enter-to="translate-x-0" leave="duration-200 ease-in"
            leave-from="translate-x-0" leave-to="translate-x-full">
            <DialogPanel
              class="relative flex flex-col max-w-full max-h-screen min-h-screen bg-white dialog-panel py-s gap-s"
              @click.self="onDialogClick">

              <div :class="['flex gap-3xs items-center px-s max-w-full', dialogClass]">
                <div class="rounded-xs p-2 bg-surface-brand-subdued [&>*]:fill-content-primary">
                  <slot name="icon" />
                </div>
                <span class="text-lg font-medium">{{ title }}</span>
                <div class="flex-1" />
                <button
                  class="flex items-center justify-center w-10 h-10 ring-1 ring-border-disabled rounded-xs text-content-primary bg-surface-primary hover:bg-surface-brand-subdued active:bg-surface-brand-hover active:text-border-brand"
                  @click="isOpen = false">
                  <PhX class="w-5 h-5" />
                </button>
              </div>
              <div class="flex-1 overflow-y-auto grow pl-s pr-2xs">
                <slot></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NSDrawerProps } from './types';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue';
import { PhX } from "@phosphor-icons/vue";

defineProps<NSDrawerProps>();

const isOpen = ref(false);

const onClose = () => {
  isOpen.value = false;
};

const onOverlayClick = () => {
  isOpen.value = false;
};

const onDialogClick = (e: any) => {
  if (e.target?.id?.startsWith('headlessui-dialog-panel')) {
    isOpen.value = false;
  }
};

</script>
