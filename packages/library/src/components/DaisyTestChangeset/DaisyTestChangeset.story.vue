<script setup lang="ts">
import { reactive } from 'vue'
import DaisyTestChangeset from './DaisyTestChangeset.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyTestChangeset></DaisyTestChangeset>
    </Variant>

    <template #controls></template>
  </Story>
</template>
