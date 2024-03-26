<script setup lang="ts">
import { provide, computed } from 'vue'
import type { Masks, Sizes } from '../../globals'

const props = withDefaults(
  defineProps<{
    size?: Sizes
    mask?: Masks
  }>(),
  {
    size: 'md'
  }
)

// Size
const size = computed(() => props.size)
provide('DaisyAvatarSize', size)

// Mask
const mask = computed(() => props.mask)
provide('DaisyAvatarMask', mask)

// Spacing
const classes = computed(() => {
  const spacing = {
    xs: '-space-x-3',
    sm: '-space-x-6',
    md: '-space-x-8',
    lg: '-space-x-10'
  }[size.value]

  return [spacing]
})
</script>

<template>
  <div class="avatar-group" :class="classes">
    <slot></slot>
  </div>
</template>
