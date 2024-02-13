<script setup lang="ts">
// import { ref, watch } from 'vue'
const props = withDefaults(
  defineProps<{
    steps: string[]
    layout?: 'horizontal' | 'vertical' | 'responsive'
  }>(),
  {
    layout: 'horizontal'
  }
)

const activeStep = defineModel<number>('activeStep', {
  default: 1
})
</script>
<template>
  <ul
    class="steps"
    :class="{
      'steps-horizontal': props.layout === 'horizontal',
      'steps-vertical': props.layout === 'vertical',
      'steps-vertical lg:steps-horizontal': props.layout === 'responsive'
    }"
  >
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
