<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAvatar from '../DaisyAvatar/DaisyAvatar.vue'
import DaisyAvatarGroup from './DaisyAvatarGroup.vue'
import { sizes } from '@/globals'

const state = reactive({
  size: 'sm'
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyAvatarGroup :size="state.size">
        <DaisyAvatar src="https://i.pravatar.cc/300?u=1"></DaisyAvatar>
        <DaisyAvatar placeholder="DK" class="bg-red-600"></DaisyAvatar>
        <DaisyAvatar src="https://i.pravatar.cc/300?u=3"></DaisyAvatar>
        <DaisyAvatar src="https://i.pravatar.cc/300?u=4"></DaisyAvatar>
        <DaisyAvatar placeholder="99+" class="bg-gray-500"></DaisyAvatar>
      </DaisyAvatarGroup>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" :options="sizes"></HstSelect>
    </template>
  </Story>
</template>
