<script setup lang="ts">
import type { DirectiveValueType as Masks } from '../../directives/vMask/VMask'
import { vMask } from '../../directives/vMask/VMask'
import { computed } from 'vue'
import { Sizes } from '../../globals'
const props = withDefaults(
  defineProps<{
    size: Sizes
    mask?: Masks
    outOf?: number
    allowHalf?: boolean
  }>(),
  {
    mask: 'star',
    outOf: 5,
    size: 'md'
  }
)
defineOptions({
  inheritAttrs: false
})

const rating = defineModel<number>({ default: 0 })

const maskMod = (n: number) => {
  if (!props.allowHalf) return ''
  return n % 2 ? 'half-1' : 'half-2'
}

const _outOf = computed(() => {
  if (props.allowHalf) {
    return props.outOf * 2
  }
  return props.outOf
})

const sizeClasses = computed(() => {
  return {
    xs: 'rating-xs',
    sm: 'rating-sm',
    md: 'rating-md',
    lg: 'rating-lg'
  }[props.size]
})

const classes = computed(() => {
  return [
    {
      'rating-half': props.allowHalf
    },
    sizeClasses.value
  ]
})
</script>
<template>
  <div class="flex rating" :class="classes">
    <input v-if="rating === 0" type="radio" class="hidden" checked />
    <input
      v-for="n in _outOf"
      :key="n"
      v-mask:[maskMod(n)]="mask"
      type="radio"
      v-bind="$attrs"
      :value="allowHalf ? n / 2 : n"
      v-model="rating"
    />
  </div>
</template>
