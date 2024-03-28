<script setup lang="ts">
import { computed } from 'vue'
import { ColorsBrand, ColorsState } from '../..//globals'
const props = withDefaults(
  defineProps<{
    steps: string[]
    /**
     * Horizontal, vertical, or responsive layout
     * Responsive layout is horizontal on large screens and vertical on small screens
     *
     * @default 'horizontal'
     */
    layout?: 'horizontal' | 'vertical' | 'responsive'

    /**
     * The color of the numbered bubble above the step label
     *
     * @default 'brand'
     */
    color?: ColorsBrand | ColorsState
  }>(),
  {
    layout: 'horizontal'
  }
)

const activeStep = defineModel<number>({
  default: 1
})

const colorClass = computed(() => {
  return {
    primary: 'step-primary',
    secondary: 'step-secondary',
    accent: 'step-accent',
    success: 'step-success',
    error: 'step-error',
    warning: 'step-warning',
    info: 'step-info'
  }[props.color]
})

const layoutClass = computed(() => {
  return {
    horizontal: 'steps-horizontal',
    vertical: 'steps-vertical',
    responsive: 'steps-vertical lg:steps-horizontal'
  }[props.layout]
})
</script>
<template>
  <ul class="steps" :class="layoutClass">
    <li
      v-for="(step, index) in steps"
      @click="activeStep = index + 1"
      :class="index + 1 <= activeStep ? colorClass : ''"
      :key="step"
      class="step"
    >
      {{ step }}
    </li>
  </ul>
</template>
