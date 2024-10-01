<template>

    <ClientOnly>
        <main class="min-h-screen p-8 pb-24">
            <section class="max-w-xl mx-auto space-y-8">
                <LandingComponentsButtonAccount />
                <h1 class="text-3xl font-extrabold md:text-4xl">Private Page</h1>
            </section>
        </main>
    </ClientOnly>
</template>

<script setup lang="ts">
import config from "@/config";
import { useRouter } from "vue-router";

if (process.client) {
    const router = useRouter();

    const supabase = useSupabaseClient()
    // Redirect the user to the callback url if already logged in.
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        router.replace(config.auth.callbackUrl);
    }
}
</script>