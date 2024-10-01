<template>
  <main class="p-8 md:p-24" data-theme={config.colors.theme}>
    <div class="mb-4 text-center">
      <NuxtLink href="/" class="btn btn-ghost btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fillRule="evenodd"
            d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
            clipRule="evenodd" />
        </svg>
        Home
      </NuxtLink>
    </div>
    <h1 class="mb-12 text-3xl font-extrabold tracking-tight text-center md:text-4xl">
      Sign-in to {{ config.appName }}
    </h1>

    <div class="max-w-xl mx-auto space-y-8">
      <button class="btn btn-block" @click="(e) => handleSignup({ type: 'oauth', provider: 'google' })"
        :disabled="isLoading">
        <span v-if="isLoading" class="loading loading-spinner loading-xs"></span>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 48 48">
          <path fill="#FFC107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
          <path fill="#FF3D00"
            d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
          <path fill="#4CAF50"
            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
          <path fill="#1976D2"
            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
        Sign-up with Google
      </button>

      <div class="text-xs font-medium divider text-base-content/50">
        OR
      </div>

      <form class="w-full space-y-4 form-control" @submit="(e) => handleSignup({ type: 'magic_link' })">
        <input required type="email" :value="email" autoComplete="email" placeholder="tom@cruise.com"
          class="w-full input input-bordered placeholder:opacity-60" @change="(e) => handleEmailChange(e)" />

        <button class="text-white btn btn-primary btn-block" :disabled="isLoading || isDisabled" type="submit">
          <span v-if="isLoading" class="loading loading-spinner loading-xs"></span>
          Send Magic Link
        </button>
      </form>
    </div>
  </main>
</template>

<script lang="tsx" setup>
import { ref, onMounted } from "vue";
import { toast } from "@steveyuowo/vue-hot-toast";
import { type Provider } from "@supabase/supabase-js";
import config from "@/config";
import { useRouter } from "vue-router";

const router = useRouter();

const supabase = useSupabaseClient()
const email = ref<string>("");
const isLoading = ref<boolean>(false);
const isDisabled = ref<boolean>(false);

const handleSignup = async (options: {
  type: string;
  provider?: Provider;
}) => {
  isLoading.value = true;

  try {
    const { type, provider } = options;
    const redirectURL = window.location.origin + "/auth/confirm";

    if (type === "oauth") {
      await supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          redirectTo: redirectURL,
        },
      });
    } else if (type === "magic_link") {
      await supabase.auth.signInWithOtp({
        email: email.value,
        options: {
          emailRedirectTo: redirectURL,
        },
      });

      toast.success("Check your emails!");

      isDisabled.value = true;
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

const handleEmailChange = (e: Event) => {
  email.value = (e?.target as HTMLInputElement)?.value
}

onMounted(async () => {
  // Redirect the user to the callback url if already logged in.
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    router.replace(config.auth.callbackUrl);
  }

})

</script>
