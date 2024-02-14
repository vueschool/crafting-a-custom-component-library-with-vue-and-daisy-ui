---
inject: true
to: packages/library/src/components/components.ts
before: "// export - do not remove this line, used for hygen generations"
skip_if: "import <%=name%> from './<%=name%>/<%=name%>.vue'"
---
  <%=name%>,