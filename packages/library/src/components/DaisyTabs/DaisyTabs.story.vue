<script setup lang="ts">
import { reactive } from 'vue'
import DaisyTabs from './DaisyTabs.vue'
import DaisyTab from '../DaisyTab/DaisyTab.vue'

const types = ['bordered', 'boxed', 'lifted'] as const
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="type in types" :key="type" :title="type">
      <DaisyTabs :type="type">
        <DaisyTab name="Tab 1">
          Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
          minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
          a accusantium, cumque error nam quaerat.
        </DaisyTab>
        <DaisyTab name="Tab 2">
          Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium
          accusantium optio soluta eaque quam? Labore libero ratione quam aut natus vitae? Error
          voluptatum velit voluptatem accusamus ut optio officia!
        </DaisyTab>
        <DaisyTab name="Tab 3">
          Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, deserunt
          accusantium ex dolores, ducimus aperiam consequatur sint debitis maxime saepe inventore
          quisquam officiis fuga voluptatem quia odio, recusandae fugit?
        </DaisyTab>
      </DaisyTabs>
    </Variant>

    <template #controls> </template>
  </Story>
</template>
