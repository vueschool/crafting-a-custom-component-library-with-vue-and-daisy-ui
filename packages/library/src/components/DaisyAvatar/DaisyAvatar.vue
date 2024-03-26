<script setup lang="ts">
import { vMask } from '../../directives/vMask/VMask'
import type { Masks, Sizes } from '../../globals'
import { computed, inject, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    mask?: Masks
    size?: Sizes
    src?: string
    placeholder?: string
  }>(),
  {
    mask: 'circle',
    size: 'md'
  }
)

// Size
const defaultSize = computed(() => props.size)
const _size = inject('DaisyAvatarSize', defaultSize)
const sizeClasses = computed(() => {
  return {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }[_size.value]
})

const textSizeClasses = computed(() => {
  return {
    xs: 'text-xs',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-3xl'
  }[_size.value]
})

// Mask
const defaultMask = computed(() => props.mask)
const _mask = inject('DaisyAvatarMask', defaultMask)

// Placeholder
const placeholderClass = computed(() => {
  return props.placeholder ? 'placeholder' : ''
})

// All classes
const classes = computed(() => {
  return [sizeClasses.value, placeholderClass.value]
})

const errorLoadingImage = ref(false)
</script>

<template>
  <div class="avatar" :class="classes" v-mask="_mask">
    <div
      v-if="(!src && placeholder) || (errorLoadingImage && placeholder)"
      :class="textSizeClasses"
      class="text-center"
    >
      {{ placeholder }}
    </div>
    <img v-else :src="src" @error="errorLoadingImage = true" />
  </div>
</template>
