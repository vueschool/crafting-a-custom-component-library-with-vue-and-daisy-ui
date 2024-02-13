<script setup lang="ts">
import { reactive } from 'vue'
import DaisySteps from './DaisySteps.vue'

const state = reactive({
  activeStep: 1
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Horizontal">
      <DaisySteps
        :steps="['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']"
        v-model:active-step="state.activeStep"
      />
    </Variant>

    <Variant title="Vertical">
      <DaisySteps
        :steps="['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']"
        layout="vertical"
        v-model:active-step="state.activeStep"
      />
    </Variant>

    <Variant title="Responsive">
      <DaisySteps
        :steps="['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']"
        layout="responsive"
        v-model:active-step="state.activeStep"
      />
    </Variant>

    <template #controls> </template>
  </Story>
</template>
