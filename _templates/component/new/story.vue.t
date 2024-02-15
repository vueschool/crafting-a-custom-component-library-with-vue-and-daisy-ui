---
to: packages/library/src/components/<%= h.componentNameWithPrefix(name) %>/<%= h.componentNameWithPrefix(name) %>.story.vue
---

<script setup lang="ts">
import { reactive } from 'vue'
import <%= h.componentNameWithPrefix(name) %> from './<%= h.componentNameWithPrefix(name) %>.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <<%= h.componentNameWithPrefix(name) %>></<%= h.componentNameWithPrefix(name) %>>
    </Variant>

    <template #controls></template>
  </Story>
</template>
