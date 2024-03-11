<script setup lang="ts">
import { provide, watch, ref } from 'vue'
import { nanoid } from 'nanoid'

const props = defineProps<{
  multipleOpen?: boolean
}>()

const accoridantData = ref({
  id: nanoid(),
  activeIds: [],
  multipleOpen: props.multipleOpen
})

watch(
  () => props.multipleOpen,
  () => {
    accoridantData.value.multipleOpen = props.multipleOpen
    accoridantData.value.activeIds = [accoridantData.value.activeIds.at(0)].filter((n) => n)
  }
)

provide('dasiyAccordianData', accoridantData)
</script>

<template>
  <div class="w-full join join-vertical">
    <slot></slot>
  </div>
</template>
