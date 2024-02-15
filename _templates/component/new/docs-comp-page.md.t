---
inject: true
to: packages/docs/components.md
before: "<!--do not remove - used by hygen-->"
skip_if: "/components/<%=name.replace(/^Daisy/i, '').toLowerCase()%>"
---
- [<%=h.capitalize(name.replace(/^Daisy/i, ''))%>](/components/<%=name.replace(/^Daisy/i, '').toLowerCase()%>)