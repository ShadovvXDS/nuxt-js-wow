<template>
  <NuxtLink v-if="user" :to="config.auth.callbackUrl"
    class="flex items-center justify-center gap-2 text-base font-medium rounded-sm h-11 px-xs text-content-on-brand bg-surface-brand hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none">

    <img v-if="user?.user_metadata?.avatar_url" :src="user?.user_metadata?.avatar_url || ''"
      :alt="user?.user_metadata?.name || 'Account'" class="w-6 h-6 rounded-full shrink-0" referrerPolicy="no-referrer"
      :width="24" :height="24" />

    <span v-else class="flex items-center justify-center w-6 h-6 rounded-full bg-base-300 shrink-0">
      {{ user?.user_metadata?.name?.charAt(0) || user?.email?.charAt(0) }}
    </span>

    {{ user?.user_metadata?.name || user?.email || "Account" }}
  </NuxtLink>

  <NuxtLink v-if="!user"
    class="flex items-center justify-center gap-2 text-sm rounded-sm h-11 font-regular px-xs text-content-on-brand bg-surface-brand hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none"
    :to="config.auth.loginUrl">
    Get Started
  </NuxtLink>

</template>

<script lang="tsx" setup>
import { useAuthStore } from "@/store/useAuthStore";
import config from "@/config";

const store = useAuthStore();
const { user } = storeToRefs(store);
</script>