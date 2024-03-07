<script setup lang="ts">
import { computed } from 'vue'
import DaisyLoading from '../DaisyLoading/DaisyLoading.vue'
import type { sizes, Sizes, ColorsBrand, ColorsState } from '../../globals'

const props = withDefaults(
  defineProps<{
    color: ColorsBrand | ColorsState | 'ghost' | 'link'
    size: Sizes
    wide?: boolean
    outline?: boolean
    square?: boolean
    circle?: boolean
    loading?: boolean
    glass?: boolean
  }>(),
  {
    color: 'neutral',
    size: 'md',
    wide: false,
    outline: false
  }
)

const classes = computed(() => {
  return {
    'btn-neutral': props.color === 'neutral',
    'btn-primary': props.color === 'primary',
    'btn-secondary': props.color === 'secondary',
    'btn-accent': props.color === 'accent',
    'btn-error': props.color === 'error',
    'btn-warning': props.color === 'warning',
    'btn-success': props.color === 'success',
    'btn-info': props.color === 'info',
    'btn-ghost': props.color === 'ghost',
    'btn-link': props.color === 'link',
    // size
    'btn-lg': props.size === 'lg',
    'btn-sm': props.size === 'sm',
    'btn-xs': props.size === 'xs',

    // other
    'btn-outline': props.outline,
    'btn-wide': props.wide,
    'btn-square': props.square,
    'btn-circle': props.circle,
    glass: props.glass
  }
})
</script>
<template>
  <button class="btn" :class="classes">
    <DaisyLoading v-if="loading" :size="size" />
    <slot></slot>
  </button>
</template>
