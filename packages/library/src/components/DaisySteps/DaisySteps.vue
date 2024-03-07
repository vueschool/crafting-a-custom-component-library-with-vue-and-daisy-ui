<script setup lang="ts">
import { computed } from 'vue'
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
  }>(),
  {
    layout: 'horizontal'
  }
)

const activeStep = defineModel<number>('activeStep', {
  default: 1
})

const classes = computed(() => {
  return {
    'steps-horizontal': props.layout === 'horizontal',
    'steps-vertical': props.layout === 'vertical',
    'steps-vertical lg:steps-horizontal': props.layout === 'responsive'
  }
})
</script>
<template>
  <ul class="steps" :class="classes">
    <li
      v-for="(step, index) in steps"
      @click="activeStep = index + 1"
      :class="{
        'step-primary': index + 1 <= activeStep
      }"
      :key="step"
      class="step"
    >
      {{ step }}
    </li>
  </ul>
</template>
