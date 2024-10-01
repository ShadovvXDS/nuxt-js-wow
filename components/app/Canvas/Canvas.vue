<template>
    <div v-if="fullScreen" class="fixed inset-0 z-10 bg-black/60" aria-hidden="true"></div>

    <CanvasToolbox :menu-state="menuState" @update:menu-state="setMenuState" :brush-width="brushWidth"
        @update:brush-width="setBrushWidth" :eraser-width="eraserWidth" @update:eraser-width="setEraserWidth"
        @add:image="addImage" @add:image-url="addImageUrl" @add:svg="addSvg"
        :class="[fullScreen ? 'hidden' : 'min-[568px]:hidden top-[-71px] absolute z-[2]']" />
    <div
        :class="[fullScreen ? 'fixed top-0 max-[567px]:top-[120px] left-1/2 -translate-x-1/2 z-50' : 'relative w-full h-full']">
        <div id="canvasContainer" class="w-full h-full">
            <ShallowCanvas key="shallowCanvas" :setRef="setRef" :handleCanvasInit="handleCanvasInit" />
            <CanvasContextMenu v-model="showContextMenu" :options="contextMenuOptions" />
        </div>
        <CanvasToolbox :menu-state="menuState" @update:menu-state="setMenuState" :brush-width="brushWidth"
            @update:brush-width="setBrushWidth" :eraser-width="eraserWidth" @update:eraser-width="setEraserWidth"
            @add:image="addImage" @add:image-url="addImageUrl" @add:svg="addSvg" class="absolute top-3"
            :class="[fullScreen ? 'max-[567px]:top-[-71px]' : 'max-[567px]:hidden']" />
        <!-- GRID BUTTON -->
        <button v-if="!config.canvas.hideGrid" id="grid-btn" @click="handleGridClick" data-tooltip-id="canvas-tooltip"
            data-tooltip-content="Add Grid"
            class="absolute top-3 left-3 p-2.5 ring-1 ring-[#EBF0F3] rounded-xl hover:bg-surface-brand-hover"
            :class="{ 'bg-surface-brand-hover': gridBackgroundActive }">
            <PhGridNine weight="duotone" class="w-5 h-5" />
        </button>
        <!-- FULLSCREEN BUTTON -->
        <button v-if="!config.canvas.hideFullscreen" id="fullscreen-btn" @click="() => setFullScreen(!fullScreen)"
            data-tooltip-id="canvas-tooltip" data-tooltip-content="Toggle Fullscreen"
            class="absolute top-3 right-3 p-2.5 ring-1 ring-[#EBF0F3] rounded-xl hover:bg-surface-brand-hover">
            <PhArrowsOut weight="duotone" class="w-5 h-5" />
        </button>

        <!-- DOWNLOAD & CLEAR BUTTONS -->
        <div className="absolute bottom-3 left-3 ring-1 ring-[#EBF0F3] rounded-xl flex divide-x-[1px]">
            <button v-if="!config.canvas.hideDownload" id="download-btn"
                className="p-2.5 hover:bg-surface-brand-hover rounded-l-xl" @click="() =>
        download('my-sketch.png')">
                <PhDownloadSimple weight="duotone" class="w-5 h-5" />
            </button>

            <ClearButton v-if="!config.canvas.hideClear" @clear="clear" />
        </div>
        <!-- TODO ContextMenu -->

        <!-- UNDO & REDO BUTTONS -->
        <div v-if="!config.canvas.hideUndoRedo"
            class="absolute bottom-3 right-3 ring-1 ring-[#EBF0F3] rounded-xl flex divide-x-[1px]">
            <button id="undo-btn" className="p-2.5 hover:bg-surface-brand-hover rounded-l-xl" @click="undo">
                <PhArrowUUpLeft weight="duotone" class="w-5 h-5" />
            </button>
            <button id="redo-btn" className="p-2.5 hover:bg-surface-brand-hover rounded-r-xl" @click="redo">
                <PhArrowUUpRight weight="duotone" class="w-5 h-5" />
            </button>
        </div>
        <!-- TODO Tooltip -->
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import CanvasToolbox from './CanvasToolbox.vue';
import ClearButton from './ClearButton.vue';
import ShallowCanvas from './ShallowCanvas.vue';
import CanvasContextMenu from './CanvasContextMenu.vue';
import config from '@/config';
import { fabric } from "fabric";
import { PhArrowsOut, PhArrowUUpLeft, PhArrowUUpRight, PhDownloadSimple, PhGridNine } from '@phosphor-icons/vue';
import type { ICanvasContext } from '~/composables/useCanvasProvider';

const MENU_ID = "canvasContextMenu";
const { setRef,
    setMenuState,
    menuState,
    fabricCanvas,
    undo,
    redo,
    clear,
    download,
    brushWidth,
    setBrushWidth,
    eraserWidth,
    setEraserWidth,
    addSvg,
    addImage,
    addImageUrl,
    fullScreen,
    setFullScreen,
    addGridBackground,
    removeGridBackground,
    gridBackgroundActive,
    activeSelection,
    setActiveSelection, } = (inject('canvasContext') as ICanvasContext);

const showContextMenu = ref(false);
const contextMenuOptions = reactive({
    activeObjectType: '',
    x: 0,
    y: 0,
});

const handleCanvasInit = (canvas: fabric.Canvas) => {
    if (!process.client) return;
    canvas.setHeight(document.getElementById("canvasContainer")!.clientHeight);
    canvas.setWidth(document.getElementById("canvasContainer")!.clientWidth);
    canvas.backgroundColor = "#FFFFFF";

    fabric.util.addListener(
        document.getElementsByClassName("upper-canvas")[0] as HTMLElement,
        "contextmenu",
        function (options: PointerEvent) {
            let target = canvas.findTarget(options, false);
            if (target) {
                // Right click on a canvas object
                let type: string = target.type!;
                canvas.setActiveObject(target);
                canvas.renderAll();
                handleContextMenu(options, type);
            } else {
                // Right click on the canvas
                canvas.discardActiveObject();
                canvas.renderAll();
            }
            options.preventDefault();
        }
    );
};

const handleGridClick = async () => {
    if (gridBackgroundActive.value) {
        await removeGridBackground();
    } else {
        await addGridBackground();
    }
}

const handleContextMenu = (event: PointerEvent, type: string) => {
    contextMenuOptions.activeObjectType = type;
    contextMenuOptions.x = event.x;
    contextMenuOptions.y = event.y;
    showContextMenu.value = true;
}

// TODO add mobile context menu and tooltips
</script>