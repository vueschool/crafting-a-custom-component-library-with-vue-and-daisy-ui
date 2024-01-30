<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>
<template>
  <button class="btn-primary btn">
    <slot>{{ label }}</slot>
  </button>
</template>
