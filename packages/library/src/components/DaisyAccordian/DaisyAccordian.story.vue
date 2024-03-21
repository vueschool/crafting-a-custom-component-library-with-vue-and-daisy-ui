<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAccordian from './DaisyAccordian.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyAccordian>
        <DaisyAccordianPanel name="Panel 1"> </DaisyAccordianPanel>
        <DaisyAccordianPanel name="Panel 2"> </DaisyAccordianPanel>
        <DaisyAccordianPanel name="Panel 3"> </DaisyAccordianPanel>
      </DaisyAccordian>
    </Variant>

    <template #controls></template>
  </Story>
</template>
