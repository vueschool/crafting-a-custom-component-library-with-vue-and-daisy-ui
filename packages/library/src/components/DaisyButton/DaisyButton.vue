<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  color: 'primary' | 'secondary' | 'accent'
}>()

const colorClass = computed(() => {
  return {
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',

    link: 'btn-link'
  }[props.color]
})
</script>

<template>
  <button class="btn" :class="colorClass"><slot></slot></button>
</template>
