---
to: packages/docs/components/<%=name.replace(/^Daisy/i, '').toLowerCase()%>.md
---

<script setup lang="ts">
import Daisy<%=name.replace(/^Daisy/i, '')%> from 'daisy-vue/<%=name.replace(/^Daisy/i, '')%>'
</script>

# <%=h.capitalize(name.replace(/^Daisy/i, ''))%> Component

## Without any props

<Daisy<%=name.replace(/^Daisy/i, '')%>/>

```vue
<Daisy<%=name.replace(/^Daisy/i, '')%> />
```