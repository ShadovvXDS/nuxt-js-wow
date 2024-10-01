<template>
    <div class="left-0 right-[50%] translate-x-[50%] flex justify-center">
        <div class="mx-auto p-1 ring-1 ring-[#EBF0F3] flex bg-white gap-1 rounded-xl">
            <!-- Select Button -->
            <button data-tooltip-id="canvas-tooltip" data-tooltip-content="Select" data-attr-shortcut="V"
                class="p-2.5 hover:bg-surface-brand-hover rounded-lg"
                :class="{ 'bg-surface-brand-hover': menuState === 'Select' }"
                @click="emit('update:menuState', 'Select')">
                <PhCursor weight="duotone" class="w-5 h-5" />
            </button>

            <!-- Brush Button -->
            <Popover class="relative">
                <PopoverButton data-tooltip-id="canvas-tooltip" data-tooltip-content="Sketch" data-attr-shortcut="S"
                    class="p-2.5 hover:bg-surface-brand-hover rounded-lg"
                    :class="{ 'bg-surface-brand-hover': menuState === 'Brush' }"
                    @click="emit('update:menuState', 'Brush')">
                    <PhPencilSimple weight="duotone" class="w-5 h-5" />
                </PopoverButton>
                <Transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0">
                    <PopoverPanel class="fixed z-10 -translate-x-[70px] mt-2" v-slot="{ close }">
                        <div
                            class="overflow-hidden rounded-xl shadow-rounded ring-1 ring-border-disabled max-w-[184px] min-w-[184px]">
                            <div class="relative flex items-end gap-4 p-3 bg-white">
                                <button class="w-2 h-2 rounded-full hover:bg-content-brand"
                                    :class="[brushWidth === 4 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:brushWidth', 4), close())" />
                                <button class="w-3 h-3 rounded-full hover:bg-content-brand"
                                    :class="[brushWidth === 6 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:brushWidth', 6), close())" />
                                <button class="w-5 h-5 rounded-lg hover:bg-content-brand"
                                    :class="[brushWidth === 10 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:brushWidth', 10), close())" />
                                <button class="w-6 h-6 rounded-lg hover:bg-content-brand"
                                    :class="[brushWidth === 12 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:brushWidth', 12), close())" />
                                <button class="w-8 h-8 rounded-lg hover:bg-content-brand"
                                    :class="[brushWidth === 16 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:brushWidth', 16), close())" />
                            </div>
                        </div>
                    </PopoverPanel>
                </Transition>
            </Popover>

            <!-- Line Button -->
            <button data-tooltip-id="canvas-tooltip" data-tooltip-content="Line" data-attr-shortcut="L"
                class="p-2.5 hover:bg-surface-brand-hover rounded-lg"
                :class="{ 'bg-surface-brand-hover': menuState === 'Line' }" @click="emit('update:menuState', 'Line')">
                <PhPenNibStraight weight="duotone" class="w-5 h-5" />
            </button>

            <!-- Shape Button -->
            <Popover v-if="!config.canvas.hideShapes" class="relative">
                <PopoverButton data-tooltip-id="canvas-tooltip" data-tooltip-content="Shape" data-attr-shortcut="O"
                    :class="['p-2.5 hover:bg-surface-brand-hover rounded-lg', menuState === 'Shape' ? 'bg-surface-brand-hover' : '']"
                    @click="emit('update:menuState', 'Shape')">
                    <PhShapes weight="duotone" class="w-5 h-5" />
                </PopoverButton>

                <Transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0" @after-leave="emit('update:menuState', 'Select')">
                    <PopoverPanel class="fixed z-10 -translate-x-[150px] mt-2" v-slot="{ close }">
                        <div
                            class="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px]">
                            <ShapePicker @select:shape="(e) => (addSvg(e), close())" />
                        </div>
                    </PopoverPanel>
                </Transition>
            </Popover>

            <!-- Icons Button -->
            <Popover v-if="!config.canvas.hideIcons" class="relative">
                <PopoverButton data-tooltip-id="canvas-tooltip" data-tooltip-content="Icons" data-attr-shortcut="I"
                    :class="['p-2.5 hover:bg-surface-brand-hover rounded-lg', menuState === 'Icons' ? 'bg-surface-brand-hover' : '']"
                    @click="emit('update:menuState', 'Icons')">
                    <PhSmileyWink weight="duotone" class="w-5 h-5" />
                </PopoverButton>

                <Transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0" @after-leave="emit('update:menuState', 'Select')">
                    <PopoverPanel class="fixed z-10 -translate-x-[150px] mt-2" v-slot="{ close }">
                        <div
                            class="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px]">
                            <IconPicker @select:icon="(e) => (addImageUrl(e), close())" />
                        </div>
                    </PopoverPanel>
                </Transition>
            </Popover>

            <!-- Brands Button -->
            <Popover v-if="!config.canvas.hideBrands" class="relative">
                <PopoverButton data-tooltip-id="canvas-tooltip" data-tooltip-content="Brands" data-attr-shortcut="B"
                    :class="['p-2.5 hover:bg-surface-brand-hover rounded-lg', menuState === 'Brands' ? 'bg-surface-brand-hover' : '']"
                    @click="emit('update:menuState', 'Brands')">
                    <PhGoogleLogo weight="duotone" class="w-5 h-5" />
                </PopoverButton>

                <Transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0" @after-leave="emit('update:menuState', 'Select')">
                    <PopoverPanel class="fixed z-10 -translate-x-[150px] mt-2" v-slot="{ close }">
                        <div
                            class="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px]">
                            <BrandIconPicker @select:icon="(e) => (addImageUrl(e), close())" />
                        </div>
                    </PopoverPanel>
                </Transition>
            </Popover>

            <!-- Upload Button -->
            <button id="upload-btn" data-tooltip-id="canvas-tooltip" data-tooltip-content="Upload Image"
                class="p-2.5 hover:bg-surface-brand-hover rounded-lg"
                @click="() => (emit('update:menuState', 'Select'), (inputFile as any)?.click())">
                <PhImage weight="duotone" class="w-5 h-5" />
            </button>

            <!-- Eraser Button -->
            <Popover v-if="!config.canvas.hideEraser" class="relative">
                <PopoverButton data-tooltip-id="canvas-tooltip" data-tooltip-content="Eraser" data-attr-shortcut="E"
                    class="p-2.5 hover:bg-surface-brand-hover rounded-lg"
                    :class="{ 'bg-surface-brand-hover': menuState === 'Eraser' }"
                    @click="emit('update:menuState', 'Eraser')">
                    <PhEraser weight="duotone" class="w-5 h-5" />
                </PopoverButton>
                <Transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0">
                    <PopoverPanel class="fixed z-10 -translate-x-[70px] mt-2" v-slot="{ close }">
                        <div
                            class="overflow-hidden rounded-xl shadow-rounded ring-1 ring-border-disabled max-w-[184px] min-w-[184px]">
                            <div class="relative flex items-end gap-4 p-3 bg-white">
                                <button class="w-2 h-2 rounded-full hover:bg-content-brand"
                                    :class="[eraserWidth === 4 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:eraserWidth', 4), close())" />
                                <button class="w-3 h-3 rounded-full hover:bg-content-brand"
                                    :class="[eraserWidth === 6 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:eraserWidth', 6), close())" />
                                <button class="w-5 h-5 rounded-lg hover:bg-content-brand"
                                    :class="[eraserWidth === 10 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:eraserWidth', 10), close())" />
                                <button class="w-6 h-6 rounded-lg hover:bg-content-brand"
                                    :class="[eraserWidth === 12 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:eraserWidth', 12), close())" />
                                <button class="w-8 h-8 rounded-lg hover:bg-content-brand"
                                    :class="[eraserWidth === 16 ? 'bg-content-brand' : 'bg-surface-secondary']"
                                    @click="() => (emit('update:eraserWidth', 16), close())" />
                            </div>
                        </div>
                    </PopoverPanel>
                </Transition>
            </Popover>

            <!-- Input for uploading images -->
            <input type="file" ref="inputFile" @change="handleFileChange" hidden />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import ShapePicker from './ShapePicker.vue';
import IconPicker from './IconPicker.vue';
import BrandIconPicker from './BrandIconPicker.vue';
import config from '@/config';
import { PhCursor, PhEraser, PhGoogleLogo, PhImage, PhPencilSimple, PhPenNibStraight, PhShapes, PhSmileyWink } from '@phosphor-icons/vue';

defineProps<{
    menuState: string,
    brushWidth: number,
    eraserWidth: number
}>();

const emit = defineEmits(['update:menuState', 'update:brushWidth', 'update:eraserWidth', 'add:svg', 'add:imageUrl', 'add:image']);

const inputFile = ref(null);

const addSvg = (svg: string) => {
    emit('add:svg', svg);
    emit('update:menuState', 'Select');
};

const addImageUrl = (imageUrl: string) => {
    emit('add:imageUrl', imageUrl);
    emit('update:menuState', 'Select');
};

const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    emit('add:image', file);
    emit('update:menuState', 'Select');
};
</script>