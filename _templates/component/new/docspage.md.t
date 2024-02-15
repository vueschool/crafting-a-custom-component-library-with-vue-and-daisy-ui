---
to: packages/docs/components/<%=name.replace(/^Daisy/i, '').toLowerCase()%>.md
---

<script setup lang="ts">
import <%= h.componentNameWithPrefix(name) %> from 'daisy-vue/<%= h.componentNameNoPrefix(name) %>'
</script>

# <%=h.capitalize(name.replace(/^Daisy/i, ''))%> Component

## Without any props

<<%= h.componentNameWithPrefix(name) %>/>

```vue
<<%= h.componentNameWithPrefix(name) %> />
```