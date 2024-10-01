<template>
    <v-slider v-model="valueProxy" :min="min" :max="max" :step="1" thumb-label color="#00C16A" track-color="#F1F5F9"
        :ripple="false" thumb-color="white">
        <template v-if="renderInput" v-slot:append>
            <div
                class="min-w-[36px] h-8 border border-border-disabled bg-surface-primary rounded-xs flex items-center justify-center text-sm font-medium">
                {{ valueProxy }}
            </div>
        </template>
    </v-slider>
</template>
<script setup lang="ts">
import type { NSSliderEmits, NSSliderProps } from './types';

const props = defineProps<NSSliderProps>();
const emit = defineEmits<NSSliderEmits>();

const valueProxy = computed({
    get: () => props.modelValue,
    set: (value: NSSliderProps['modelValue']) =>
        emit('update:modelValue', value),
});
</script>
<style>
.v-slider-thumb {
    background-image: url('data:image/svg+xml,<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.28585 1.42852C3.28585 1.03403 3.60565 0.714233 4.00014 0.714233C4.39463 0.714233 4.71443 1.03403 4.71443 1.42852V8.57138C4.71443 8.96587 4.39463 9.28566 4.00014 9.28566C3.60565 9.28566 3.28585 8.96587 3.28585 8.57138V1.42852ZM0.428711 2.85709C0.428711 2.4626 0.748508 2.1428 1.143 2.1428C1.53749 2.1428 1.85728 2.4626 1.85728 2.85709V7.14281C1.85728 7.53729 1.53749 7.85709 1.143 7.85709C0.748508 7.85709 0.428711 7.53729 0.428711 7.1428V2.85709ZM7.57157 2.85709C7.57157 2.4626 7.25177 2.1428 6.85728 2.1428C6.46279 2.1428 6.143 2.4626 6.143 2.85709V7.1428C6.143 7.53729 6.46279 7.85709 6.85728 7.85709C7.25177 7.85709 7.57157 7.53729 7.57157 7.1428V2.85709Z" fill="%2300C16A"/></svg>');
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    color: #00C16A;
}

.v-slider-thumb:hover {
    background-image: url('data:image/svg+xml,<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.28585 1.42852C3.28585 1.03403 3.60565 0.714233 4.00014 0.714233C4.39463 0.714233 4.71443 1.03403 4.71443 1.42852V8.57138C4.71443 8.96587 4.39463 9.28566 4.00014 9.28566C3.60565 9.28566 3.28585 8.96587 3.28585 8.57138V1.42852ZM0.428711 2.85709C0.428711 2.4626 0.748508 2.1428 1.143 2.1428C1.53749 2.1428 1.85728 2.4626 1.85728 2.85709V7.14281C1.85728 7.53729 1.53749 7.85709 1.143 7.85709C0.748508 7.85709 0.428711 7.53729 0.428711 7.1428V2.85709ZM7.57157 2.85709C7.57157 2.4626 7.25177 2.1428 6.85728 2.1428C6.46279 2.1428 6.143 2.4626 6.143 2.85709V7.1428C6.143 7.53729 6.46279 7.85709 6.85728 7.85709C7.25177 7.85709 7.57157 7.53729 7.57157 7.1428V2.85709Z" fill="%23F9F6FE"/></svg>') !important;
}

.v-slider-thumb:hover .v-slider-thumb__surface {
    color: #00C16A !important;
}
</style>