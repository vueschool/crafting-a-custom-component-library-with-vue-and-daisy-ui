<script setup lang="ts">
import { inject } from 'vue'

const id = inject('accordianId', '')

if (!id) {
  throw new Error('DaisyAccordianPanel must be used inside a DaisyAccordian')
}
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="border collapse collapse-arrow join-item border-base-300">
    <input type="radio" :name="id" checked="checked" />
    <div class="text-xl font-medium collapse-title">{{ title }}</div>
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>
