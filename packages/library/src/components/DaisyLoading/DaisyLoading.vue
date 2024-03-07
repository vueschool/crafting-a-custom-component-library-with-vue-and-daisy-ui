<script setup lang="ts">
import { computed } from 'vue'
import type { ColorsBrand, ColorsState, Sizes } from '../../globals'
import { types } from './config'

const props = withDefaults(
  defineProps<{
    type?: (typeof types)[number]
    size?: Sizes
    color?: ColorsBrand | ColorsState
  }>(),
  {
    type: 'spinner',
    size: 'md'
  }
)

const typeClass = computed(() => {
  return {
    spinner: 'loading-spinner',
    dots: 'loading-dots',
    ring: 'loading-ring',
    ball: 'loading-ball',
    bars: 'loading-bars',
    infinity: 'loading-infinity'
  }[props.type]
})

const sizeClass = computed(() => {
  return {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg'
  }[props.size]
})

const colorClass = computed(() => {
  return {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    neutral: 'text-neutral',

    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
    info: 'text-info'
  }[props.color]
})
</script>

<template>
  <span class="loading" :class="[sizeClass, typeClass, colorClass]"></span>
</template>
