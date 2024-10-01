<template>
  <TransitionRoot :show="modelValue" as="template" enter="duration-300 ease-out" enter-from="opacity-0"
    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
    <Dialog :open="modelValue" @close="setIsOpen" class="relative z-50">

      <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto z-40">
        <div class="flex items-start justify-center min-h-full p-2 overflow-hidden md:items-center">

          <!-- Wrap your panel in a `TransitionChild`. -->
          <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="relative w-full h-full max-w-3xl p-6 overflow-visible text-left align-middle transition-all transform shadow-xl rounded-xl bg-base-100 md:p-8">
              <div class="flex items-center justify-between mb-4 min-w-10">
                <DialogTitle as="h2" class="font-semibold">
                  I&apos;m a modal
                </DialogTitle>
                <button class="btn btn-square btn-ghost btn-sm" @click="() => setIsOpen(false)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path
                      d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>

              <section>And here is my content</section>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>


    </Dialog>
  </TransitionRoot>
</template>

<script lang="tsx" setup>
import { defineProps, defineEmits } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { type ModalEmits } from "./types";

const props = defineProps<{ modelValue: boolean }>();
const emits = defineEmits<ModalEmits>()
const { modelValue } = toRefs(props);

function setIsOpen(value: boolean) {
  emits("update:modelValue", value);
}

</script>
