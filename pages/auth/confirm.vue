<template>
    <div>Waiting for login...</div>
</template>
<script setup lang="ts">
import config from '~/config';

const user = useSupabaseUser()

watch(user, () => {
    if (user.value) {
        // Redirect to protected page
        return navigateTo(config.auth.callbackUrl)
    }
}, { immediate: true })
</script>