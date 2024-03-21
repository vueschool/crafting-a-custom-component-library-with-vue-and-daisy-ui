<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAccordian from './DaisyAccordian.vue'
import DaisyAccordianPanel from '../DaisyAccordianPanel/DaisyAccordianPanel.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Only One Open at a Time">
      <DaisyAccordian>
        <DaisyAccordianPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </DaisyAccordianPanel>
        <DaisyAccordianPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </DaisyAccordianPanel>
      </DaisyAccordian>
    </Variant>

    <Variant title="Multiple Open at One Time">
      <DaisyAccordian multiple-open>
        <DaisyAccordianPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </DaisyAccordianPanel>
        <DaisyAccordianPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </DaisyAccordianPanel>
      </DaisyAccordian>
    </Variant>

    <template #controls></template>
  </Story>
</template>
