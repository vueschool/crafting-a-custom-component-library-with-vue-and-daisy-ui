---
to: packages/docs/components/<%=name.replace(/^Daisy/i, '').toLowerCase()%>.md
---

<script setup lang="ts">
import {<%= h.componentNameWithPrefix(name) %>} from 'daisy-vue'
</script>

# <%=h.capitalize(h.componentNameNoPrefix(name))%> Component

## Without any props

<<%= h.componentNameWithPrefix(name) %>/>

```vue
<<%= h.componentNameWithPrefix(name) %> />
```