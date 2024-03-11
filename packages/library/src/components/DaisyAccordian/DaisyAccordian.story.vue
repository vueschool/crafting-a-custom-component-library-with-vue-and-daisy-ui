<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAccordian from './DaisyAccordian.vue'
import DaisyAccordianPanel from '../DaisyAccordianPanel/DaisyAccordianPanel.vue'

const state = reactive({
  multipleOpen: false
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="">
      <DaisyAccordian v-bind:state>
        <DaisyAccordianPanel title="Panel 1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi adipisci, consectetur iure
          ab minima, fugiat eos iste nam voluptates est veniam. Necessitatibus fugit delectus quasi
          quia eius quidem, voluptatum possimus?
        </DaisyAccordianPanel>
        <DaisyAccordianPanel title="Panel 2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae deleniti odio
          reiciendis. Laborum tempora consequuntur ullam, animi praesentium, neque dolores maiores
          optio nihil provident aut incidunt asperiores sapiente blanditiis.
        </DaisyAccordianPanel>
        <DaisyAccordianPanel title="Panel 3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quos ut illo ratione? Atque
          similique minus quos quo praesentium facere dignissimos laborum corrupti. Vel hic
          voluptatibus odit sequi repellat commodi.
        </DaisyAccordianPanel>
      </DaisyAccordian>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.multipleOpen" title="Multiple Open" />
    </template>
  </Story>
</template>
