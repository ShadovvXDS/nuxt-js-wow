<template>
    <Canvas />
</template>

<script setup>
import { provide } from 'vue';
import { Canvas } from '@/components/app';
import { useCanvasProvider } from '@/composables/useCanvasProvider';

const canvasContext = useCanvasProvider();
provide('canvasContext', canvasContext);

const handleWindowSizeChange = () => {
    const object = document.getElementById("canvas-showcase-wrapper");
    let containerWidth = 0;
    let containerHeight = 0;
    if (canvasContext.fullScreen.value) {
        containerWidth = window.innerWidth;
        containerHeight = window.innerHeight;
    } else if (object.clientWidth > 600) {
        containerWidth = 600 * 0.87;
        containerHeight = 600 * 0.87;
    } else {
        containerWidth = object.clientWidth * 0.87;
        containerHeight = object.clientHeight * 0.87;
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
}, {})

onMounted(() => {
    canvasContext.setMenuState("Brush");
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
});
onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
});
</script>