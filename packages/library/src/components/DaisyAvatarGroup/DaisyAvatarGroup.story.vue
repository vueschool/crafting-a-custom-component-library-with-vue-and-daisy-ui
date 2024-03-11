<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAvatar from '../DaisyAvatar/DaisyAvatar.vue'
import DaisyAvatarGroup from './DaisyAvatarGroup.vue'
import { sizes, masks, Masks } from '@/globals'

const state = reactive({
  size: 'sm',
  mask: 'circle' as Masks
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyAvatarGroup :size="state.size">
        <DaisyAvatar :mask="state.mask" src="https://i.pravatar.cc/300?u=1"></DaisyAvatar>
        <DaisyAvatar :mask="state.mask" placeholder="DK" class="bg-red-600"></DaisyAvatar>
        <DaisyAvatar :mask="state.mask" src="https://i.pravatar.cc/300?u=3"></DaisyAvatar>
        <DaisyAvatar :mask="state.mask" src="https://i.pravatar.cc/300?u=4"></DaisyAvatar>
        <DaisyAvatar :mask="state.mask" placeholder="99+" class="bg-gray-500"></DaisyAvatar>
      </DaisyAvatarGroup>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" :options="sizes" title="Size"></HstSelect>
      <HstSelect v-model="state.mask" :options="masks" title="Mask"></HstSelect>
    </template>
  </Story>
</template>
