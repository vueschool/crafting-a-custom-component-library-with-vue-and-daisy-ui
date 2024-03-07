<script setup lang="ts">
import { reactive } from 'vue'
import DaisyLoading from './DaisyLoading.vue'
import { types } from './config'
import type { ColorsBrand, ColorsState } from '../../globals/colors'
import { colorsBrand, colorsState } from '../../globals/colors'
import { sizes } from '../../globals/sizes'

const state = reactive({
  color: '' as ColorsBrand | ColorsState
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <template v-for="type in types" :key="type">
      <template v-for="size in sizes" :key="size">
        <Variant :title="`${type} - ${size}`">
          <DaisyLoading :type="type" :size="size" :color="state.color" />
        </Variant>
      </template>
    </template>

    <template #controls>
      <HstSelect v-model="state.color" :options="[...colorsBrand, ...colorsState]" title="Color" />
    </template>
  </Story>
</template>
