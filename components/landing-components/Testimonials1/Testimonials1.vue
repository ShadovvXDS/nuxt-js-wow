<template>
  <section id="testimonials" class="mb-8">
    <div class="px-4 py-12 mx-auto max-w-7xl">
      <div class="flex flex-col w-full text-center">
        <div
          class="w-fit mx-auto px-3 py-2 bg-green-700 bg-opacity-5 rounded-[200px] border border-surface-brand items-center gap-2 pr-4 flex mb-3">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.8125 0.375H2.125C1.79348 0.375 1.47554 0.506696 1.24112 0.741116C1.0067 0.975537 0.875 1.29348 0.875 1.625V6.625C0.875 6.95652 1.0067 7.27446 1.24112 7.50888C1.47554 7.7433 1.79348 7.875 2.125 7.875H6.8125V8.5C6.8125 9.16304 6.54911 9.79893 6.08027 10.2678C5.61143 10.7366 4.97554 11 4.3125 11C4.14674 11 3.98777 11.0658 3.87056 11.1831C3.75335 11.3003 3.6875 11.4592 3.6875 11.625C3.6875 11.7908 3.75335 11.9497 3.87056 12.0669C3.98777 12.1842 4.14674 12.25 4.3125 12.25C5.30674 12.249 6.25997 11.8535 6.96301 11.1505C7.66605 10.4475 8.06147 9.49424 8.0625 8.5V1.625C8.0625 1.29348 7.9308 0.975537 7.69638 0.741116C7.46196 0.506696 7.14402 0.375 6.8125 0.375ZM6.8125 6.625H2.125V1.625H6.8125V6.625ZM15.875 0.375H11.1875C10.856 0.375 10.538 0.506696 10.3036 0.741116C10.0692 0.975537 9.9375 1.29348 9.9375 1.625V6.625C9.9375 6.95652 10.0692 7.27446 10.3036 7.50888C10.538 7.7433 10.856 7.875 11.1875 7.875H15.875V8.5C15.875 9.16304 15.6116 9.79893 15.1428 10.2678C14.6739 10.7366 14.038 11 13.375 11C13.2092 11 13.0503 11.0658 12.9331 11.1831C12.8158 11.3003 12.75 11.4592 12.75 11.625C12.75 11.7908 12.8158 11.9497 12.9331 12.0669C13.0503 12.1842 13.2092 12.25 13.375 12.25C14.3692 12.249 15.3225 11.8535 16.0255 11.1505C16.7285 10.4475 17.124 9.49424 17.125 8.5V1.625C17.125 1.29348 16.9933 0.975537 16.7589 0.741116C16.5245 0.506696 16.2065 0.375 15.875 0.375ZM15.875 6.625H11.1875V1.625H15.875V6.625Z"
              fill="#00C16A" />
          </svg>
          <span class="text-content-brand font-semibold leading-[18.20px] text-sm">
            Testimonials
          </span>
        </div>
        <div class="mb-8">
          <h2 class="text-4xl font-extrabold sm:text-5xl text-base-content">
            Join over 250 makers leveraging Nuxt Starter AI!
          </h2>
        </div>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3 text-base-content/80">
          These makers took the leap to ship their apps faster in days not
          weeks!
        </p>
      </div>
    </div>
    <ul role="list"
      class="px-4 mx-auto space-y-4 max-w-7xl md:columns-2 lg:columns-3 xl:columns-4 md:space-y-6 md:gap-6">
      <li v-for="(testimonial) in defaultTestimonials" class="justify-center break-inside-avoid max-md:flex">

        <div v-if="testimonial.type === 'video'" class="max-w-[550px] rounded-3xl p-4 bg-surface-brand">
          <div data-vjs-player class="relative w-full overflow-hidden rounded-2xl">
            <video :id="`video-${testimonial.id}`" :poster="testimonial.poster"
              class="!w-full !h-full max-sm:!h-[89%] relative testimonial-video rounded-2xl overflow-hidden"></video>
            <div class="absolute bottom-0 z-10 h-24 animate-opacity" :style="{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
      }"></div>
            <div class="absolute bottom-0 z-50 w-full">
              <div class="flex items-center justify-between p-4">
                <button @click="() => toggleVideo(testimonial.id)" class="group" type="button">
                  <svg v-if="!playingStates[testimonial.id]" width="48" height="48" viewBox="0 0 48 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2"
                      d="M42.7931 25.2544L15.7781 41.7769C15.5527 41.9137 15.2951 41.9887 15.0314 41.9943C14.7678 41.9999 14.5073 41.9358 14.2762 41.8086C14.0452 41.6814 13.8518 41.4956 13.7155 41.2698C13.5792 41.0439 13.5049 40.7862 13.5 40.5225V7.47751C13.5049 7.21382 13.5792 6.95608 13.7155 6.73028C13.8518 6.50448 14.0452 6.3186 14.2762 6.19139C14.5073 6.06418 14.7678 6.00013 15.0314 6.00571C15.2951 6.01128 15.5527 6.08628 15.7781 6.22314L42.7931 22.7456C43.0089 22.8762 43.1874 23.0603 43.3112 23.2801C43.4351 23.4998 43.5001 23.7478 43.5001 24C43.5001 24.2523 43.4351 24.5002 43.3112 24.72C43.1874 24.9397 43.0089 25.1238 42.7931 25.2544Z"
                      fill="white" />
                    <path
                      d="M43.575 21.4668L16.56 4.94058C16.1045 4.66168 15.5829 4.50943 15.0489 4.49954C14.5149 4.48965 13.988 4.62249 13.5225 4.88433C13.0615 5.14211 12.6774 5.51804 12.4098 5.97347C12.1422 6.42889 12.0008 6.94737 12 7.47558V40.5243C12.0035 41.3167 12.3214 42.0752 12.884 42.6332C13.4466 43.1912 14.2077 43.5029 15 43.5C15.553 43.4997 16.0953 43.3473 16.5675 43.0593L43.575 26.5331C44.0091 26.2685 44.3679 25.8967 44.6168 25.4534C44.8658 25.0101 44.9966 24.5102 44.9966 24.0018C44.9966 23.4934 44.8658 22.9936 44.6168 22.5503C44.3679 22.107 44.0091 21.7352 43.575 21.4706V21.4668ZM15 40.4887V7.49996L41.9681 24L15 40.4887Z"
                      fill="white" />
                  </svg>
                  <svg v-if="playingStates[testimonial.id]" width="48" height="48" viewBox="0 0 48 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2"
                      d="M39 9V39C39 39.3978 38.842 39.7794 38.5607 40.0607C38.2794 40.342 37.8978 40.5 37.5 40.5H30C29.6022 40.5 29.2206 40.342 28.9393 40.0607C28.658 39.7794 28.5 39.3978 28.5 39V9C28.5 8.60218 28.658 8.22064 28.9393 7.93934C29.2206 7.65804 29.6022 7.5 30 7.5H37.5C37.8978 7.5 38.2794 7.65804 38.5607 7.93934C38.842 8.22064 39 8.60218 39 9ZM18 7.5H10.5C10.1022 7.5 9.72064 7.65804 9.43934 7.93934C9.15804 8.22064 9 8.60218 9 9V39C9 39.3978 9.15804 39.7794 9.43934 40.0607C9.72064 40.342 10.1022 40.5 10.5 40.5H18C18.3978 40.5 18.7794 40.342 19.0607 40.0607C19.342 39.7794 19.5 39.3978 19.5 39V9C19.5 8.60218 19.342 8.22064 19.0607 7.93934C18.7794 7.65804 18.3978 7.5 18 7.5Z"
                      fill="white" />
                    <path
                      d="M37.5 6H30C29.2044 6 28.4413 6.31607 27.8787 6.87868C27.3161 7.44129 27 8.20435 27 9V39C27 39.7957 27.3161 40.5587 27.8787 41.1213C28.4413 41.6839 29.2044 42 30 42H37.5C38.2956 42 39.0587 41.6839 39.6213 41.1213C40.1839 40.5587 40.5 39.7957 40.5 39V9C40.5 8.20435 40.1839 7.44129 39.6213 6.87868C39.0587 6.31607 38.2956 6 37.5 6ZM37.5 39H30V9H37.5V39ZM18 6H10.5C9.70435 6 8.94129 6.31607 8.37868 6.87868C7.81607 7.44129 7.5 8.20435 7.5 9V39C7.5 39.7957 7.81607 40.5587 8.37868 41.1213C8.94129 41.6839 9.70435 42 10.5 42H18C18.7956 42 19.5587 41.6839 20.1213 41.1213C20.6839 40.5587 21 39.7957 21 39V9C21 8.20435 20.6839 7.44129 20.1213 6.87868C19.5587 6.31607 18.7956 6 18 6ZM18 39H10.5V9H18V39Z"
                      fill="white" />
                  </svg>
                </button>
                <div v-if="!playingStates[testimonial.id]" class="text-right animate-opacity">
                  <p class="font-bold text-content-on-brand">
                    {{ testimonial.fullName }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative z-20 pt-4 text-lg font-medium select-none text-content-on-brand">
            <p>"{{ testimonial.text as string }}"</p>
          </div>
        </div>

        <figure v-if="testimonial.type === 'tweet'"
          class="relative h-full w-full max-w-[550px] p-4 rounded-3xl bg-surface-brand-subdued">

          <NuxtImg v-if="testimonial.imageUrl" :src="testimonial.imageUrl"
            class="mb-6 border rounded-md border-border-disabled" :width="262" :alt="testimonial.fullName" />
          <blockquote class="relative">
            <p class="text-lg xl:text-sm text-base-content">

              <template v-if="typeof testimonial.text === 'string'">
                {{ testimonial.text }}
              </template>
              <span v-if="typeof testimonial.text !== 'string'">
                <span v-for="text in testimonial.text">
                  <span v-if="text.type === 'default'">
                    {{ text.text }}
                  </span>
                  <span v-if="text.type === 'highlighted'">
                    <span class="bg-surface-brand text-content-on-brand px-0.5">
                      {{ text.text }}
                    </span>
                  </span>
                  <span v-if="text.type === 'link'">
                    <span class="cursor-pointer text-content-brand">
                      {{ text.text }}
                    </span>
                  </span>
                  <span v-if="text.type !== 'breakline'">
                    <br />
                    <br />
                  </span>
                </span>
              </span>
            </p>
          </blockquote>
          <figcaption class="relative flex items-center justify-start gap-4 pt-4 mt-6 border-t border-[#1f29370d]">
            <div class="overflow-hidden rounded-full bg-base-300 shrink-0">
              <NuxtImg :alt="`${testimonial.fullName}'s testimonial for NuxtStaterAI`"
                class="object-cover w-10 h-10 rounded-full" :src="testimonial.avatar" :height="40" :width="40" />
            </div>
            <div class="flex items-center justify-between w-full gap-2">
              <div>
                <div class="text-sm font-medium text-[#1f2937]">
                  {{ testimonial.fullName }}
                </div>
                <div class="mt-0.5 text-sm text-[#1f2937cc]">
                  @{{ testimonial.username }}
                </div>
              </div>
              <a class="shrink-0 " aria-label="See user review on Product Hunt">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.3608 3.66412C15.3717 3.80995 15.3717 3.95496 15.3717 4.09996C15.3717 8.53745 11.9942 13.6508 5.82166 13.6508C3.92 13.6508 2.15333 13.1 0.666664 12.1433C0.936664 12.1741 1.19666 12.185 1.4775 12.185C2.98832 12.1886 4.45637 11.6834 5.645 10.7508C4.94452 10.7381 4.26548 10.507 3.7027 10.0897C3.13991 9.67247 2.72148 9.08987 2.50583 8.42329C2.71333 8.45412 2.92166 8.47496 3.14 8.47496C3.44083 8.47496 3.74333 8.43329 4.02416 8.36079C3.26396 8.2073 2.58039 7.79525 2.08968 7.19469C1.59897 6.59414 1.33141 5.84216 1.3325 5.06662V5.02495C1.78 5.27412 2.29916 5.42995 2.84916 5.45079C2.3884 5.14461 2.0106 4.72914 1.74945 4.24145C1.4883 3.75375 1.35193 3.209 1.3525 2.65579C1.3525 2.03245 1.51833 1.46079 1.80916 0.962455C2.65261 1.99997 3.70458 2.84876 4.89694 3.45384C6.0893 4.05892 7.39546 4.4068 8.73083 4.47496C8.67916 4.22495 8.6475 3.96579 8.6475 3.70579C8.64728 3.26492 8.73395 2.82834 8.90256 2.42099C9.07117 2.01364 9.31841 1.64352 9.63015 1.33178C9.94189 1.02004 10.312 0.772797 10.7194 0.604186C11.1267 0.435576 11.5633 0.348902 12.0042 0.349122C12.9708 0.349122 13.8433 0.754121 14.4567 1.40912C15.2081 1.2638 15.9288 0.989473 16.5867 0.598288C16.3362 1.37397 15.8115 2.03171 15.1108 2.44829C15.7773 2.37227 16.4287 2.197 17.0433 1.92829C16.5843 2.59754 16.0154 3.18441 15.3608 3.66412Z"
                    fill="#00ACEE" />
                </svg>
              </a>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
  </section>

</template>

<script lang="tsx" setup>
import { ref, watch, onMounted } from 'vue';
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";
import { defaultTestimonials } from "./testimonials";

const options = {
  responsive: false,
  fluid: false,
  controls: false,
  errorDisplay: false,
};


const videoRef = ref<{ element: HTMLVideoElement; id: string }[]>([]);
const playerRef = ref<{ player: Player; id: string }[]>([]);
const playingStates = ref<Record<string, boolean>>({});

watch(videoRef, (oldValue, newValue) => {
  if (playerRef.value.length === 0) {
    const playerRefsToUpdate = defaultTestimonials
      ?.filter((item) => item.videoUrl)
      .map((item) => {
        const player = videojs(
          videoRef.value?.find((test) => test.id == item.id)?.element as Element,
          {
            sources: [{ src: item.videoUrl, type: "application/x-mpegURL" }],
            ...options,
          }
        );
        return { player, id: item.id };
      });
    playerRef.value = playerRefsToUpdate;
  }
});

onMounted(() => {
  const videoRefsToUpdateWith = defaultTestimonials.map(testimonial => {
    const videoElement = document.getElementById(`video-${testimonial.id}`) as HTMLVideoElement | null;
    if (videoElement) {
      return { id: testimonial.id, element: videoElement }
    }
  }).filter(i => i);
  videoRef.value = videoRefsToUpdateWith as { element: HTMLVideoElement; id: string }[];
})

const toggleVideo = (id: string) => {
  const currPlayer = playerRef.value?.find((item) => item.id === id);

  if (!playingStates.value[id]) {
    currPlayer?.player.play();
    playingStates.value = { ...playingStates.value, [id]: true }
  } else {
    currPlayer?.player.pause();
    playingStates.value = { ...playingStates.value, [id]: false }
  }
};
</script>