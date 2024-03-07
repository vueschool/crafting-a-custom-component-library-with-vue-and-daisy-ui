<script setup lang="ts">
import { reactive } from 'vue'
import DaisySteps from './DaisySteps.vue'

const state = reactive({
  activeStep: 1
})

const steps = ['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']
const layouts = ['horizontal', 'vertical', 'responsive']
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="layout in layouts" :key="layout" :title="layout">
      <DaisySteps :steps="steps" v-model:active-step="state.activeStep" />
    </Variant>

    <template #controls> </template>
  </Story>
</template>
