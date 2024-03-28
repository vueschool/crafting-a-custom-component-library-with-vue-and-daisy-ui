<script setup lang="ts">
import { reactive } from 'vue'
import DaisySteps from './DaisySteps.vue'
import { Colors, ColorsBrand, colorsState, colorsBrand, ColorsState } from '../../globals'

const state = reactive({
  activeStep: 1,
  color: 'primary' as ColorsBrand | ColorsState
})

const steps = ['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']
const layouts = ['horizontal', 'vertical', 'responsive'] as const
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="layout in layouts" :key="layout" :title="layout">
      <DaisySteps :steps="steps" v-model="state.activeStep" :layout="layout" :color="state.color" />
    </Variant>
    <template #controls>
      <HstSelect v-model="state.color" :options="[...colorsBrand, ...colorsState]"></HstSelect>
    </template>
  </Story>
</template>
