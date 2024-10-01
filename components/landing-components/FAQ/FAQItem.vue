<template>
  <li>
    <button
      class="relative flex items-center w-full gap-2 py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
      @click="handleClick" :aria-expanded="isOpen">
      <span :class="'flex-1 text-base-content' + (isOpen ? ' text-primary' : ' ')">
        {{ item?.question }}
      </span>
      <svg class="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect y="7" :width="16" :height="2" :rx="1"
          :class="`transform origin-center transition duration-200 ease-out` + (isOpen ? ' rotate-180' : ' ')" />
        <rect :y="7" :width="16" :height="2" :rx="1"
          :class="`transform origin-center rotate-90 transition duration-200 ease-out` + (isOpen ? ' rotate-180 hidden' : ' ')" />
      </svg>
    </button>

    <div :ref="accordion" class="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" :style="isOpen
        ? { maxHeight: accordion?.scrollHeight, opacity: 1 }
        : { maxHeight: 0, opacity: 0 }
        ">
      <div class="pb-5 leading-relaxed">
        <item.answer />
      </div>
    </div>
  </li>
</template>

<script lang="tsx" setup>
import { ref } from 'vue';
import { type FAQItemProps } from './types';
const props = defineProps<{ item: FAQItemProps }>();
const { item } = props;

const isOpen = ref<boolean>(false);
const accordion = ref();

const handleClick = (e: Event) => {
  e.preventDefault();
  isOpen.value = !isOpen.value;
}

</script>

<style></style>