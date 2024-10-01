<template>
    <div class="flex flex-col gap-2 mx-auto max-w-[572px] my-10">
        <AppCanvasToolbox class="!left-auto !right-auto !translate-x-0" v-model:menu-state="canvasConfig.menuState"
            v-model:brush-width="canvasConfig.brushWidth" v-model:eraser-width="canvasConfig.eraserWidth" />
        {{ canvasConfig }}

        <LandingComponentsButtonLead />
        <NSButton><template #prefix>Prefix</template><template #suffix>Suffix</template>Brand</NSButton>
        <NSButton variant="danger"><template #prefix>Prefix</template><template #suffix>Suffix</template>Danger
        </NSButton>
        <NSDrawer title="Test Drawer" dialog-class="w-[400px] bg-surface-primary">
            <template #trigger>
                Drawer trigger
            </template>
            <template #icon>
                <PhAirplaneTilt class="w-5 h-5" weight="duotone" />
            </template>
            blabla
        </NSDrawer>
        <NSSlider v-model="sliderValue" :min="0" :max="100" />
        <NSSlider v-model="sliderValue" :min="0" :max="100" :render-input="true" />
        <AppStepper :active-step="activeStep" :step-options="stepOptions" />
        <NSButton @click="changeStep">Change</NSButton>
        <AppFontSelector v-model="font" />
        Selected Font: {{ font }}
        <NSSwitch v-model="switchValue" />
        <NSSwitch v-model="switchValue" size="lg" />
        <div class="flex items-center gap-2">
            Selected Icon: <img :src="selectedIconPath" class="w-4 h-4" />
        </div>
        <div
            class="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px] mx-auto">
            <AppCanvasIconPicker @select:icon="handleIconSelect" />
        </div>
        <div
            class="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px] mx-auto">
            <AppCanvasBrandIconPicker @select:icon="handleIconSelect" />
        </div>

        <div class="flex items-center gap-2">
            Selected Shape: <svg v-html="selectedShape" class="w-8 h-8"></svg>
        </div>
        <div
            class="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px] mx-auto">
            <AppCanvasShapePicker @select:shape="handleShapeSelect" />
        </div>
        <AppCanvasClearButton @clear="onClear" />
        <AppColorPicker v-model="color" allow-empty />
        Selected color: {{ color }}
        <AppCountryFlagPicker v-model="country" />
        Selected country: {{ country }}
        <AppKeyboardDrawer />
    </div>
</template>
<script setup lang="ts">
import { NSButton, NSDrawer, NSSwitch, NSSlider } from '@/components/base';
import { PhAirplaneTilt } from "@phosphor-icons/vue";
import type { Step } from '~/components/app/Stepper';

const stepOptions: Step[] = [
    {
        label: "Step 1",
        value: "step-1",
    },
    {
        label: "Step 2",
        value: "step-2",
    },
    {
        label: "Step 3",
        value: "step-3",
    },
];
const activeStep = ref(stepOptions[0]);
const changeStep = () => {
    const index = stepOptions.findIndex(step => step.value === activeStep.value.value);
    activeStep.value = stepOptions[(index + 1) % stepOptions.length]
};

const font = ref('Roboto');
const switchValue = ref(false);

const selectedIconPath = ref('');
const handleIconSelect = (iconPath: string) => {
    selectedIconPath.value = `${iconPath}`;
}

const selectedShape = ref('');
const handleShapeSelect = (svg: string) => {
    selectedShape.value = `${svg}`;
}

const onClear = () => {
    alert('clear clicked');
}

const canvasConfig = reactive({
    menuState: 'Select',
    brushWidth: 4,
    eraserWidth: 4,
})

const color = ref('');
const country = ref<string | null>(null);
const sliderValue = ref(50);

</script>