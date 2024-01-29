<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>
<template>
  <button class="my-button">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.my-button {
  background-color: #f00;
}
</style>
