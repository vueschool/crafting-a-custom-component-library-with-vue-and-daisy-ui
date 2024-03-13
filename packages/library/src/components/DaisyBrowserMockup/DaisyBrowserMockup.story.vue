<script setup lang="ts">
import { reactive } from 'vue'
import DaisyBrowserMockup from './DaisyBrowserMockup.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyBrowserMockup url="https://vueschool.io"> Hello! </DaisyBrowserMockup>
    </Variant>

    <template #controls></template>
  </Story>
</template>
