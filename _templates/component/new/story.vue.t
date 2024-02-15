---
to: packages/library/src/components/Daisy<%=name.replace(/^Daisy/i, '')%>/Daisy<%=name.replace(/^Daisy/i, '')%>.story.vue
---

<script setup lang="ts">
import { reactive } from 'vue'
import Daisy<%=name.replace(/^Daisy/i, '')%> from './Daisy<%=name.replace(/^Daisy/i, '')%>.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <Daisy<%=name.replace(/^Daisy/i, '')%>></Daisy<%=name.replace(/^Daisy/i, '')%>>
    </Variant>

    <template #controls></template>
  </Story>
</template>
