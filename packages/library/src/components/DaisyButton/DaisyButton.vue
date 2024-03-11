<script setup lang="ts">
import { computed } from 'vue'
import { ColorsBrand, ColorsState } from '../../globals'
const props = defineProps<{
  color: ColorsBrand | ColorsState | 'ghost' | 'link'
}>()

const colorClass = computed(() => {
  return {
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    info: 'btn-info',
    link: 'btn-link'
  }[props.color]
})
</script>

<template>
  <button class="btn" :class="colorClass"><slot></slot></button>
</template>
