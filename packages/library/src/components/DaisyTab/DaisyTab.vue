<script setup lang="ts">
import { inject, ref, computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const registerTab = inject('DaisyVueTabsComponentRegisterTab', (name: string) => {})
registerTab(props.name)

const tabsData = inject(
  'DaisyVueTabsData',
  ref({
    activeTab: ''
  })
)

const isActive = computed(() => tabsData.value.activeTab === props.name)
</script>

<template>
  <div
    role="tabpanel"
    class="tabpanel"
    :class="{
      hidden: !isActive
    }"
  >
    <slot></slot>
  </div>
</template>
