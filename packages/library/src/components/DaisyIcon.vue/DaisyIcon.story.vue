<script setup lang="ts">
import { reactive } from 'vue'
import DaisyIcon from './DaisyIcon.vue'

const state = reactive<{
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}>({
  size: 'md'
})

const icons = ['warning', 'error', 'success', 'info'] as const
</script>
<template>
  <Story :layout="{ type: 'grid', width: 150 }">
    <Variant v-for="icon in icons" :key="icon" :title="icon">
      <DaisyIcon :icon="icon" :size="state.size" />
    </Variant>

    <template #controls>
      <HstSelect
        v-model="state.size"
        :title="'Size'"
        :options="{
          xs: 'Extra Small',
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
          xl: 'Extra Large',
          '2xl': '2 Extra Large'
        }"
      />
    </template>
  </Story>
</template>
