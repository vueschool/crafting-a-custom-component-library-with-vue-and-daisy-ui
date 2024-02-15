<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    color:
      | 'neutral'
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'error'
      | 'warning'
      | 'success'
      | 'info'
      | 'ghost'
      | 'link'

    size: 'lg' | 'default' | 'sm' | 'xs'
    wide?: boolean
    outline?: boolean
  }>(),
  {
    color: 'neutral',
    size: 'default',
    wide: false,
    outline: false
  }
)

const classes = computed(() => {
  return {
    // colors
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

    // outline
    'btn-outline': props.outline,
    'btn-wide': props.wide
  }
})
</script>
<template>
  <button class="btn" :class="classes">
    <slot></slot>
  </button>
</template>
