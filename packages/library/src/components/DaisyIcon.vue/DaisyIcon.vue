<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
const props = withDefaults(
  defineProps<{
    icon: 'warning' | 'error' | 'success' | 'info'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  }>(),
  {
    size: 'md'
  }
)

function ucFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const hw = computed(() => {
  const map = {
    xs: 1.5,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    '2xl': 6
  }
  return `${map[props.size]}rem`
})

const IconComponent = defineAsyncComponent(() => import(`./DaisyIcon${ucFirst(props.icon)}.vue`))
</script>
<template>
  <IconComponent
    :style="{
      height: hw,
      width: hw
    }"
  />
</template>
