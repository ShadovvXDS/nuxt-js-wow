<template>
    <context-menu v-model:show="valueProxy" :options="optionsComponent">
        <context-menu-item label="Bring to front" @click="handleFrontClick" shortcut="cmd/ctrl + ]" />
        <context-menu-item label="Bring to forward" @click="handleForwardClick" shortcut="]" />
        <context-menu-item label="Send to back" @click="handleBackClick" shortcut="[" />
        <context-menu-item label="Send to backward" @click="handleBackClick" shortcut="cmd/ctrl + [" />
        <context-menu-item label="Deselect" @click="handleDeselectClick" shortcut="ESC" />
        <context-menu-item label="Remove" @click="handleRemoveClick" shortcut="Del" />
        <context-menu-item v-if="options.activeObjectType === 'activeSelection'" label="Group Items"
            @click="handleGroupClick" />
        <context-menu-item v-else-if="options.activeObjectType === 'group'" label="Ungroup Items"
            @click="handleUngroupClick" />
    </context-menu>
</template>
<script setup lang="ts">
import type { ICanvasContext } from '~/composables/useCanvasProvider';

export type ContextMenuProps = {
    modelValue: boolean;
    options: {
        activeObjectType: string,
        x: number,
        y: number,
    };
};

export type ContextMenuEmits = (
    event: 'update:modelValue',
    parameter: ContextMenuProps['modelValue'],
) => void;

const props = defineProps<ContextMenuProps>();
const emit = defineEmits<ContextMenuEmits>();

const valueProxy = computed({
    get: () => props.modelValue,
    set: (value: ContextMenuProps['modelValue']) =>
        emit('update:modelValue', value),
});

const optionsComponent = computed(() => {
    return {
        zIndex: 3,
        minWidth: 230,
        x: props.options.x,
        y: props.options.y,
    };
});

const { fabricCanvas } = (inject('canvasContext') as ICanvasContext);

const handleRemoveClick = () => {
    fabricCanvas.value.getActiveObjects().forEach((obj) => {
        fabricCanvas.value.remove(obj);
    });

    fabricCanvas.value.discardActiveObject().requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
const handleForwardClick = () => {
    fabricCanvas.value.getActiveObjects().forEach((obj) => {
        fabricCanvas.value.bringForward(obj);
    });
    fabricCanvas.value.discardActiveObject().requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
const handleFrontClick = () => {
    fabricCanvas.value.getActiveObjects().forEach((obj) => {
        fabricCanvas.value.bringToFront(obj);
    });
    fabricCanvas.value.discardActiveObject().requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
const handleBackwardClick = () => {
    fabricCanvas.value.getActiveObjects().forEach((obj) => {
        fabricCanvas.value.sendBackwards(obj);
    });
    fabricCanvas.value.discardActiveObject().requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
const handleBackClick = () => {
    fabricCanvas.value.getActiveObjects().forEach((obj) => {
        fabricCanvas.value.sendToBack(obj);
    });
    fabricCanvas.value.discardActiveObject().requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
const handleDeselectClick = () => {
    fabricCanvas.value.discardActiveObject().requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
const handleGroupClick = () => {
    (
        fabricCanvas.value.getActiveObject() as any
    ).toGroup();
    fabricCanvas.value.requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
const handleUngroupClick = () => {
    (
        fabricCanvas.value.getActiveObject() as any
    ).toActiveSelection();
    fabricCanvas.value.requestRenderAll();
    fabricCanvas.value.fire("object:modified");
};
</script>
<style>
* {
    --mx-menu-placeholder-width: 0;
}

.mx-context-menu-item {
    padding: 3px 15px;
}
</style>