<template>
    <Canvas />
</template>

<script setup>
import { provide } from 'vue';
import Canvas from './Canvas.vue';
import { useCanvasProvider } from '@/composables/useCanvasProvider';

const canvasContext = useCanvasProvider();
provide('canvasContext', canvasContext);

const handleWindowSizeChange = () => {
    let containerWidth = 0;
    let containerHeight = 0;
    if (canvasContext.fullScreen.value) {
        containerWidth = document.body.clientWidth;
        containerHeight = document.body.clientHeight;
    } else {
        containerWidth = document.body.clientWidth;
        containerHeight = containerWidth;
    }

    const min = Math.min(containerWidth, containerHeight);

    const scale = min / canvasContext.fabricCanvas.value.getWidth();
    if (scale === 1) return;
    const zoom = canvasContext.fabricCanvas.value.getZoom() * scale;
    canvasContext.fabricCanvas.value.setDimensions({
        width: min,
        height: min,
    });
    canvasContext.fabricCanvas.value.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
};

watch(() => canvasContext.fullScreen.value, () => {
    handleWindowSizeChange();
})

onMounted(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
});
onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
});
</script>