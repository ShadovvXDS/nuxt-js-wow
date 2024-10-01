<template>
    <canvas ref="canvasRef" class="w-full h-full rounded-2xl" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    setRef: Function,
    handleCanvasInit: Function
});

const canvasRef = ref(null);

onMounted(() => {
    if (canvasRef.value) {
        props.setRef!(canvasRef.value, props.handleCanvasInit);
    }
});
</script>