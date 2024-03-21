<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<template>
  <div class="border mockup-browser border-base-300">
    <div class="mockup-browser-toolbar">
      <div class="border input border-base-300">{{ url }}</div>
    </div>
    <div class="flex justify-center px-4 py-16 border-t border-base-300">
      <slot></slot>
    </div>
  </div>
</template>
