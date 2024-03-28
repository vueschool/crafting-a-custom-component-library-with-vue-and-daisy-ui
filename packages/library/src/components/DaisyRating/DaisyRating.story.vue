<script setup lang="ts">
import { reactive, ref } from 'vue'
import DaisyRating from './DaisyRating.vue'
import { Sizes, sizes } from '../../globals'

const data1 = ref(0)
const data2 = ref(0)

const state = reactive({
  size: 'md' as Sizes
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="flex items-center gap-2">
        <DaisyRating v-model="data1" v-bind="state" />
        <div>Result: {{ data1 }}</div>
      </div>
    </Variant>

    <Variant title="Allow Half">
      <div class="flex items-center gap-2">
        <DaisyRating v-model="data2" allowHalf v-bind="state" />
        <div>Result: {{ data2 }}</div>
      </div>
    </Variant>

    <Variant title="Custom Color">
      <DaisyRating class="bg-orange-400" v-bind="state" />
    </Variant>

    <Variant title="Custom Mask">
      <DaisyRating class="bg-red-500" mask="heart" v-bind="state" />
    </Variant>
    <Variant title="Custom outOf">
      <DaisyRating :outOf="10" v-bind="state" />
    </Variant>

    <template #controls>
      <HstSelect :options="sizes" title="Size" v-model="state.size" />
    </template>
  </Story>
</template>
