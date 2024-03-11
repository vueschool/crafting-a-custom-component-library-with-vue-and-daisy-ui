<script setup lang="ts">
import { reactive } from 'vue'
import DaisyButton from './DaisyButton.vue'

const state = reactive({
  disabled: false
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant title="Accent">
      <DaisyButton color="accent" :disabled="state.disabled"> Click Me </DaisyButton>
    </Variant>
    <Variant title="primary">
      <DaisyButton color="primary" :disabled="state.disabled"> Click Me </DaisyButton>
    </Variant>
    <Variant title="secondary">
      <DaisyButton color="secondary" :disabled="state.disabled"> Click Me </DaisyButton>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>
