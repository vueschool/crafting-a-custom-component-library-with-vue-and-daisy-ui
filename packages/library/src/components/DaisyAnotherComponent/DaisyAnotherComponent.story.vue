<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAnotherComponent from './DaisyAnotherComponent.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyAnotherComponent></DaisyAnotherComponent>
    </Variant>

    <template #controls></template>
  </Story>
</template>
