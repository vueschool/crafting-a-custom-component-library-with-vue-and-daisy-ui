<script setup lang="ts">
import { computed } from 'vue'
import DaisyLoading from '../DaisyLoading/DaisyLoading.vue'
import type { Sizes, ColorsBrand, ColorsState } from '../../globals'
import { useConfig } from '../../global-config'

const props = withDefaults(
  defineProps<{
    color?: ColorsBrand | ColorsState | 'ghost' | 'link'
    size?: Sizes
    wide?: boolean
    outline?: boolean
    square?: boolean
    circle?: boolean
    loading?: boolean
    glass?: boolean
  }>(),
  {
    size: 'md',
    wide: false,
    outline: false
  }
)

const colorClasses = computed(() => {
  return {
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    error: 'btn-error',
    warning: 'btn-warning',
    success: 'btn-success',
    info: 'btn-info',
    ghost: 'btn-ghost',
    link: 'btn-link'
  }[props.color]
})

const sizeClasses = computed(() => {
  return {
    lg: 'btn-lg',
    sm: 'btn-sm',
    xs: 'btn-xs'
  }[props.size]
})

const otherClasses = computed(() => {
  return {
    'btn-outline': props.outline,
    'btn-wide': props.wide,
    'btn-square': props.square,
    'btn-circle': props.circle,
    glass: props.glass
  }
})

const config = useConfig()
const loadingType = config.button.loading
</script>
<template>
  <button class="btn" :class="[colorClasses, sizeClasses, otherClasses]">
    <DaisyLoading v-if="loading" :size="size" :type="loadingType" />
    <slot></slot>
  </button>
</template>
