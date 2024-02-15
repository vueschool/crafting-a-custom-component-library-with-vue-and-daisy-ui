<script setup lang="ts">
// import { reactive } from 'vue'
import DaisyRating from './DaisyRating.vue'

// const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <DaisyRating />
    </Variant>

    <Variant title="Custom Color">
      <DaisyRating bgClass="bg-orange-400" />
    </Variant>

    <Variant title="Custom Shape">
      <DaisyRating bgClass="bg-red-500" shape="heart" />
    </Variant>

    <template #controls></template>
  </Story>
</template>
