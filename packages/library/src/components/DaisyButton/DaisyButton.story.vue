<script setup lang="ts">
import { reactive } from 'vue'
import DaisyButton from './DaisyButton.vue'

const state = reactive({
  content: 'Click Me',
  disabled: false
})
</script>
<template>
  <Story>
    <DaisyButton :disabled="state.disabled">{{ state.content }}</DaisyButton>
    <template #controls>
      <HstText v-model="state.content" title="Content" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>
