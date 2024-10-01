<template>
    <div class="relative flex flex-col gap-3 p-3 bg-white">
        <NSTab v-model="shapeType" :options="['Regular', 'Solid']" />
        <div class="grid grid-cols-9 gap-3">
            <button v-for="(shape, index) in shapes[shapeType as 'Regular' | 'Solid']" :key="index" class="w-6 h-6"
                v-html="shape" @click="onShapeSelect(shape)"></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NSTab } from '@/components/base';
import { shapes } from './shapes';

const emit = defineEmits(['select:shape']);

const shapeType = ref('Regular');

function onShapeSelect(shape: string) {
    emit('select:shape', shape);
}
</script>