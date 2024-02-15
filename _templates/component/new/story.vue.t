---
to: packages/library/src/components/Daisy<%=name.replace(/^Daisy/i, '')%>/Daisy<%=name.replace(/^Daisy/i, '')%>.story.vue
---

<script setup lang="ts">
import { reactive } from 'vue'
import <%=name%> from './<%=name%>.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <<%=name%>></<%=name%>>
    </Variant>

    <template #controls></template>
  </Story>
</template>
