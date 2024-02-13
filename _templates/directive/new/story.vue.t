---
to: packages/library/src/directives/<%=name%>/<%=name%>.story.vue
---

<script setup lang="ts">
import { reactive } from 'vue'
import { v<%=name%> } from './V<%=name%>'

const state = reactive({});

</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Directive">
      <div v<%=name.replace(/[A-Z]/g, m => "-" + m.toLowerCase())%>=""></div>
    </Variant>
    <template #controls></template>
  </Story>
</template>
