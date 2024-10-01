<template>
  <li :key="i">
    <figure class=" relative w-[462px] h-[231px]  p-8 bg-white rounded-3xl">
      <blockquote class="relative">
        <p class="text-sm text-base-content/80">{{ testimonial.text }}</p>
      </blockquote>
      <figcaption class="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
        <div class="overflow-hidden rounded-full bg-base-300 shrink-0">
          <NuxtImg v-if="testimonial.img" class="w-10 h-10 rounded-full object-cover" :src="list[i].img"
            :alt="`${list[i].name}'s testimonial for ${config.appName}`" :width="48" :height="48" />
          <span v-else
            class="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
            {{ testimonial.name.charAt(0) }}
          </span>
        </div>
        <div class="w-full flex items-end justify-between gap-2">
          <div>
            <div class="text-sm font-medium text-base-content">
              {{ testimonial.name }}
            </div>
            <div v-if="testimonial.username" class="mt-0.5 text-sm text-base-content/80">
              @{{ testimonial.username }}
            </div>
          </div>


          <span v-if="testimonial.type?.svg" class="shrink-0 " aria-label={testimonial.type?.ariaLabel}>
            <testimonial.type?.svg />
          </span>

        </div>
      </figcaption>
    </figure>
  </li>
</template>

<script lang="tsx" setup>
import { defineProps, toRefs } from 'vue';
import config from "@/config";
import { list } from "./testimonials";
const props = defineProps<{ i: number }>();

const { i } = toRefs(props);

const testimonial = list[i.value];

</script>
