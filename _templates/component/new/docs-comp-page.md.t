---
inject: true
to: packages/docs/components.md
before: "<!--do not remove - used by hygen-->"
skip_if: "/components/<%=name.toLowerCase()%>"
---
- [<%=h.capitalize(name)%>](/components/<%=name.toLowerCase()%>)