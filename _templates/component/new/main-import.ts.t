---
inject: true
to: packages/library/src/main.ts
before: "// import - do not remove this line, used for hygen generations"
skip_if: "import <%=name%> from './components/<%=name%>/<%=name%>.vue'"
---
import <%=name%> from './components/<%=name%>/<%=name%>.vue'