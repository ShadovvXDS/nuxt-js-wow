<script setup lang="ts">
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
import { Toaster } from "@steveyuowo/vue-hot-toast";
import CrispChat from "@/components/app/CrispChat/CrispChat.vue";

import { useAuthStore } from '@/store/useAuthStore';
import config from "./config";

const { setUser } = useAuthStore();
const supabase = useSupabaseClient()



onMounted(() => {
  const getUser = async () => {
    const { data } = await supabase.auth.getUser();

    setUser(data.user);
  };
  getUser();
})

useHead({
  title: config.appName,
  meta: [
    { name: 'description', content: config.appDescription }
  ],
  htmlAttrs: {
    lang: 'en',
    "data-theme": "light"
  },
})
</script>

<template>
  <div class="overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <Toaster />
  <CrispChat />
</template>
