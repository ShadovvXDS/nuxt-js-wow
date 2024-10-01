<template>
  <div
    class="flex justify-center items-center m-10 relative max-lg:mx-0 max-sm:mx-0 max-sm:block max-sm:w-[98vw] max-sm:ml-auto max-sm:mr-auto max-sm:overflow-scroll animated-tabs-container">
    <div ref="containerRef"
      class="relative flex p-2 bg-white backdrop-blur rounded-2xl gap-[20px] max-sm:gap-[5px] max-sm:w-[550px]"
      :class="subContainerClassName">
      <div class="absolute transition-all top-2 bottom-2 bg-border-brand rounded-2xl"
        :style="{ left: `${offset}px`, right: `${containerWidth - (offset + width)}px` }"></div>

      <template v-for="option in options" :key="option.value">
        <div v-if="modelValue.value === option.value" ref="activeRef" @click="() => emit('update:modelValue', option)"
          class="z-10 p-2 px-5 text-sm font-medium cursor-pointer">
          <span class="text-center transition-all" :class="modelValue?.value === option.value
        ? 'text-white'
        : 'text-black'
        ">
            {{ option.label }}
          </span>
        </div>

        <div v-else ref="none" @click="() => emit('update:modelValue', option)"
          class="z-10 p-2 px-5 text-sm font-medium cursor-pointer">
          <span class="text-center transition-all" :class="modelValue?.value === option.value
        ? 'text-white'
        : 'text-black'
        ">
            {{ option.label }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import type { AnimatedTabsProps, AnimatedTabsEmits } from './types';

defineProps<AnimatedTabsProps>();
const emit = defineEmits<AnimatedTabsEmits>();

const containerRef = ref<HTMLDivElement | null>(null);
const activeRef = ref<HTMLDivElement[] | null>(null);
const none = ref<HTMLDivElement[] | null>(null);

const offset = ref<number>(0);
const width = ref<number>(0);
const containerWidth = ref<number>(0);

const handleChange = () => {
  if (activeRef?.value?.[0]?.clientWidth) {
    offset.value = activeRef?.value?.[0]?.offsetLeft || 0;
    width.value = activeRef?.value?.[0]?.clientWidth || 0;
  }
};

watch(() => [activeRef.value], () => {
  handleChange();
}, { deep: true });

watch(() => containerRef.value, () => {
  const cont = containerRef.value;
  if (cont) {
    containerWidth.value = cont.clientWidth;
  }
}, { deep: true });

onMounted(() => {
  window.addEventListener("resize", handleWindowSizeChange);
  handleWindowSizeChange();
});
onUnmounted(() => {
  window.removeEventListener("resize", handleWindowSizeChange);
});
const handleWindowSizeChange = () => {
  handleChange();
};
</script>

<style>
.animated-tabs-container::-webkit-scrollbar {
  display: none;
}

.animated-tabs-container {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>