import { defineStore } from 'pinia'
import { type UserResponse } from "@supabase/supabase-js";

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<UserResponse["data"]["user"] | null>(null);

  const setUser = (userData: UserResponse["data"]["user"] | null) => {
    user.value = userData;
  }

  return { user, setUser }
})