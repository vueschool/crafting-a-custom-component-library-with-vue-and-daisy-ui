<script setup lang="ts">
import type { DirectiveValueType as Shapes } from '../../directives/vMask/VMask'
import { vMask } from '../../directives/vMask/VMask'
withDefaults(
  defineProps<{
    bgClass?: string
    shape?: Shapes
  }>(),
  {
    shape: 'star',
    bgClass: ''
  }
)

const rating = defineModel<number>('rating', { default: 0 })
const outOf = defineModel<number>('outOf', { default: 5 })
</script>
<template>
  <div
    class="flex rating"
    :class="{
      'gap-1': shape !== 'star'
    }"
  >
    <input v-if="rating === 0" type="radio" class="hidden" checked />
    <input
      v-for="n in outOf"
      :key="n"
      v-mask="shape"
      type="radio"
      :class="[bgClass]"
      :checked="n === rating"
      @input="rating = n"
    />
  </div>
</template>
