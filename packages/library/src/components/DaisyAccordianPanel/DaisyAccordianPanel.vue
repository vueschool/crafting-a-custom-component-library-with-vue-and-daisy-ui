<script setup lang="ts">
import { inject, ref } from 'vue'
import { nanoid } from 'nanoid'
const props = defineProps<{
  title?: string
}>()

const id = nanoid()

const defaultData = ref({
  id: null,
  activeIds: [],
  multipleOpen: false
})
const accordian = inject('dasiyAccordianData', defaultData)

if (accordian.value.id === null) {
  throw new Error('DaisyAccordianPanel must be used within a DaisyAccordian')
}

function handleClick() {
  // if currently active panel is clicked, close it
  if (accordian.value.activeIds.includes(id)) {
    accordian.value.activeIds = accordian.value.activeIds.filter((activeId) => activeId !== id)
  } else {
    // otherwise open it
    if (!accordian.value.multipleOpen) {
      accordian.value.activeIds = []
    }
    accordian.value.activeIds.push(id)
  }
}

function handleEnter(e: KeyboardEvent) {
  console.log(e.key)
}
</script>

<template>
  <div
    class="border collapse collapse-arrow join-item border-base-300 bg-base-100"
    :class="{ 'collapse-open': accordian.activeIds.includes(id) }"
  >
    <button
      class="block font-bold text-left cursor-pointer collapse-title focus:shadow-primary focus:outline-none"
      @click="handleClick"
      @keypress="handleEnter"
    >
      <slot name="title">{{ title }}</slot>
    </button>
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>
