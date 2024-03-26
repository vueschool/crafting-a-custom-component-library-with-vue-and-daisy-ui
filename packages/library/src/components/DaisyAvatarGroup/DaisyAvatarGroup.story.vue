<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAvatar from '../DaisyAvatar/DaisyAvatar.vue'
import DaisyAvatarGroup from './DaisyAvatarGroup.vue'
import { sizes, masks, Masks, Sizes } from '../../globals'

const state = reactive({
  size: 'sm' as Sizes,
  mask: 'circle' as Masks
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Daisy Avatar Group">
      <DaisyAvatarGroup :mask="state.mask" :size="state.size">
        <DaisyAvatar src="https://i.pravatar.cc/300?u=1"></DaisyAvatar>
        <DaisyAvatar placeholder="DK" class="bg-red-600"></DaisyAvatar>
        <DaisyAvatar src="https://i.pravatar.cc/300?u=3"></DaisyAvatar>
        <DaisyAvatar src="https://i.pravatar.cc/300?u=4"></DaisyAvatar>
        <DaisyAvatar placeholder="99+" class="bg-gray-500"></DaisyAvatar>
      </DaisyAvatarGroup>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" :options="sizes" title="Size"></HstSelect>
      <HstSelect v-model="state.mask" :options="masks" title="Mask"></HstSelect>
    </template>
  </Story>
</template>
