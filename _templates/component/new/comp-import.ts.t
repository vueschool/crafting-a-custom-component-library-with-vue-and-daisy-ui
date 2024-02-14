---
inject: true
to: packages/library/src/components/components.ts
before: "// import - do not remove this line, used for hygen generations"
skip_if: "import <%=name%> from './<%=name%>/<%=name%>.vue'"
---
import <%=name%> from './<%=name%>/<%=name%>.vue'