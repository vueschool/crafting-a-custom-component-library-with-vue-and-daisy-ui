<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAvatar from './DaisyAvatar.vue'
import DaisyAvatarGroup from '../DaisyAvatarGroup/DaisyAvatarGroup.vue'
import { sizes } from '@/globals'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant :title="`With Image - ${size}`" v-for="size in sizes" :key="size">
      <DaisyAvatar :size="size" :src="`https://i.pravatar.cc/300?u=2`" />
    </Variant>

    <Variant :title="`With Placeholder - ${size}`" v-for="size in sizes" :key="size">
      <DaisyAvatar :size="size" placeholder="DK" class="bg-red-500" />
    </Variant>

    <Variant :title="`Custom BG Color ${size}`" v-for="size in sizes" :key="size">
      <DaisyAvatar
        :size="size"
        placeholder="DK"
        :class="
          {
            xs: 'bg-red-500',
            sm: 'bg-blue-500',
            md: 'bg-green-500',
            lg: 'bg-yellow-500'
          }[size]
        "
      />
    </Variant>

    <Variant :title="`Custom BG Color ${size}`" v-for="size in sizes" :key="size">
      <DaisyAvatar
        :size="size"
        placeholder="DK"
        :class="
          {
            xs: 'bg-red-500',
            sm: 'bg-blue-500',
            md: 'bg-green-500',
            lg: 'bg-yellow-500'
          }[size]
        "
      />
    </Variant>

    <template #controls></template>
  </Story>
</template>
