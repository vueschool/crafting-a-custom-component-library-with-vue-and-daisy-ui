<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAlert from './DaisyAlert.vue'

const state = reactive({
  dismissable: false,
  longText: false
})

const types = [
  {
    type: 'info',
    content: 'This is an info alert'
  },
  {
    type: 'success',
    content: 'This is a success alert'
  },
  {
    type: 'warning',
    content: 'This is a warning alert'
  },
  {
    type: 'error',
    content: 'This is an error alert'
  }
] as const
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="type in types" :key="type.type" :title="type.type">
      <DaisyAlert :type="type.type" :dismissible="state.dismissable">
        {{ type.content }}
        <span v-if="state.longText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nesciunt dicta provident
          accusantium, fuga nihil possimus impedit corrupti quia exercitationem odit id consectetur
          praesentium debitis! Sint quam aspernatur officiis aliquam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sit deleniti sequi, ipsum cumque, expedita reprehenderit
          doloribus dolorum tempore laboriosam dolor sed saepe molestias quidem? Perspiciatis vero
          sed fuga doloremque! Accusamus.
        </span>
      </DaisyAlert>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.dismissable" title="Dismissable" />
      <HstCheckbox v-model="state.longText" title="Long Text" />
    </template>
  </Story>
</template>
