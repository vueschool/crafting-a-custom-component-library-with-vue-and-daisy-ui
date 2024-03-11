<script setup lang="ts">
import { reactive } from 'vue'
import DaisyButton from './DaisyButton.vue'
import { colorsBrand, colorsState } from '../../globals'

const state = reactive({
  disabled: false
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant
      v-for="color in [...colorsBrand, ...colorsState, 'ghost' as const, 'link' as const]"
      :key="color"
      :title="color"
    >
      <DaisyButton :color="color" :disabled="state.disabled"> Click Me </DaisyButton>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>
