<script setup lang="ts">
import { reactive } from 'vue'
import DaisyBadge from './DaisyBadge.vue'
import { sizes, colorsBrand, colorsState } from '@/globals'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant v-for="size in sizes" :key="size" :title="size">
      <DaisyBadge :size="size">24</DaisyBadge>
    </Variant>
    <Variant
      v-for="color in [...colorsBrand, ...colorsState, undefined, 'ghost' as const]"
      :key="color"
      :title="color"
    >
      <DaisyBadge :color="color" size="lg">24</DaisyBadge>
    </Variant>
    <Variant title="Empty Primary">
      <DaisyBadge v-for="size in sizes" :key="size" color="primary" :size="size"></DaisyBadge>
    </Variant>

    <Variant title="Empty Secondary">
      <DaisyBadge v-for="size in sizes" :key="size" color="secondary" :size="size"></DaisyBadge>
    </Variant>

    <Variant
      v-for="color in [...colorsBrand, ...colorsState, undefined, 'ghost' as const]"
      :key="color"
      :title="`Outline ${color}`"
    >
      <DaisyBadge :color="color" outline size="lg">24</DaisyBadge>
    </Variant>

    <template #controls></template>
  </Story>
</template>
