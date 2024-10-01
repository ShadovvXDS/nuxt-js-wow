<template>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { Crisp } from "crisp-sdk-web";
import config from "@/config";
import { useAuthStore } from "~/store/useAuthStore";
const { user } = useAuthStore();

const route = useRoute();

watch([route?.path], () => {
  if (config?.crisp?.id) {
    // Set up Crisp
    Crisp.configure(config.crisp.id);

    // (Optional) If onlyShowOnRoutes array is not empty in config.js file, Crisp will be hidden on the routes in the array.
    // Use <AppButtonSupport> instead to show it (user clicks on the button to show Crisp—it cleans the UI)
    if (
      config.crisp.onlyShowOnRoutes &&
      !config.crisp.onlyShowOnRoutes?.includes(route?.path)
    ) {
      Crisp.chat.hide();
      Crisp.chat.onChatClosed(() => {
        Crisp.chat.hide();
      });
    }
  }
}, { deep: true });

watch([user?.email], () => {
  if (user?.email && config?.crisp?.id) {
    Crisp.session.setData({ userId: user?.id });
  }
})

</script>
