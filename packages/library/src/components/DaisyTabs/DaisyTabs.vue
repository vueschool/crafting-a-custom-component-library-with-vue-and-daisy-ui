<script setup lang="ts">
import { ref, watch, provide, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    type: 'bordered' | 'boxed' | 'lifted'
  }>(),
  {
    type: 'lifted'
  }
)

const tabs = ref([])
function registerTab(label: string) {
  if (tabs.value.includes(label)) return
  tabs.value.push(label)
  if (!_activeTab.value) _activeTab.value = label
}
provide('DaisyVueTabsComponentRegisterTab', registerTab)

const activeTab = defineModel('activeTab')
const _activeTab = ref(activeTab.value)
watch(_activeTab, () => (activeTab.value = _activeTab.value))

const tabsData = computed(() => {
  return {
    activeTab: _activeTab.value
  }
})
provide('DaisyVueTabsData', tabsData)

const classes = computed(() => {
  return {
    bordered: 'tabs-bordered',
    boxed: 'tabs-boxed',
    lifted: 'tabs-lifted'
  }[props.type]
})
</script>

<template>
  <div :data-type="type">
    <div role="tablist" class="tabs" :class="classes">
      <template v-for="tab in tabs" :key="tab">
        <button
          @click="_activeTab = tab"
          role="tab"
          class="tab"
          :aria-label="tab"
          :class="{ 'tab-active': activeTab === tab }"
        >
          {{ tab }}
        </button>
      </template>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
[data-type='lifted'] :deep(.tabpanel) {
  @apply p-6 rounded-t-none bg-base-100 border-base-300 rounded-box;
}
[data-type='boxed'] :deep(.tabpanel) {
  @apply p-6 border-base-300 rounded-box;
}

[data-type='bordered'] :deep(.tabpanel) {
  @apply p-6 border-base-300 rounded-box;
}
</style>
