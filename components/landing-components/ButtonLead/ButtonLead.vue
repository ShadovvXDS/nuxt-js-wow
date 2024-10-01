<template>
  <form :class="`w-full max-w-xs space-y-3 ${extraStyle ? extraStyle : ''}`" @submit="handleSubmit">
    <input required type="email" :value="email" ref="inputRef" autoComplete="email" placeholder="leonardo@dicaprio.com"
      class="w-full input input-bordered placeholder:opacity-60"
      @change="(e) => email = (e.target as HTMLInputElement).value" />

    <button class="text-white btn btn-primary btn-block" type="submit" :disabled="isDisabled">
      Join waitlist
      <span v-if="isLoading" class="loading loading-spinner loading-xs"></span>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fillRule="evenodd"
          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
          clipRule="evenodd" />
      </svg>
    </button>
  </form>
</template>

<script lang="tsx" setup>
// This component is used to collect the emails from the landing page
// You'd use this if your product isn't ready yet or you want to collect leads
// For instance: A popup to send a freebie, joining a waitlist, etc.
// It calls the /api/lead.ts route and store a Lead document in the database
import { defineProps, ref } from 'vue';
import { type ButtonLeadProps } from "./types";
import apiClient from "@/libs/api";
import { toast } from "@steveyuowo/vue-hot-toast";

const props = defineProps<ButtonLeadProps>();
const { extraStyle } = props;

const inputRef = ref<HTMLInputElement | null>(null);
const email = ref<string>("");
const isLoading = ref<boolean>(false);
const isDisabled = ref<boolean>(false);

const handleSubmit = async (e: Event) => {
  e?.preventDefault();

  isLoading.value = true;
  try {
    await apiClient.post("/lead", { email: email.value });

    toast.success("Thanks for joining the waitlist!");

    // just remove the focus on the input
    (inputRef.value as HTMLInputElement).blur();
    email.value = "";
    isDisabled.value = true;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

</script>
