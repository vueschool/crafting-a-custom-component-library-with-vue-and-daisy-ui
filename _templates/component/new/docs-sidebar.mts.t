---
inject: true
to: packages/docs/.vitepress/config.mts
before: "// do not remove - used by hygen"
skip_if: "link: '/components/<%=name.toLowerCase()%>'"
---

          { text: '<%=h.capitalize(name)%>', link: '/components/<%=name.toLowerCase()%>' }