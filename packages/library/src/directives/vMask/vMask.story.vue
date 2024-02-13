<script setup lang="ts">
// import { reactive } from 'vue'
import { vMask } from './VMask'

const masks = [
  'squircle',
  'heart',
  'hexagon',
  'hexagon-2',
  'decagon',
  'pentagon',
  'diamond',
  'circle',
  'square',
  'parallelogram',
  'parallelogram-2',
  'parallelogram-3',
  'parallelogram-4',
  'star',
  'triangle',
  'triangle-2',
  'triangle-3',
  'triangle-4'
] as const
</script>
<template>
  <Story :layout="{ type: 'grid', width: '300px' }">
    <Variant v-for="mask in masks" :key="mask" :title="mask">
      <img
        v-mask="mask"
        style="{width: '300px'}"
        src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
      />
    </Variant>

    <template #controls></template>
  </Story>
</template>
