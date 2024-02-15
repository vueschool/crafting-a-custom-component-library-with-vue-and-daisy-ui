---
inject: true
to: packages/library/src/components/components.ts
before: "// export - do not remove this line, used for hygen generations"
skip_if: "import Daisy<%=name.replace(/^Daisy/i, '')%> from './Daisy<%=name.replace(/^Daisy/i, '')%>/Daisy<%=name.replace(/^Daisy/i, '')%>.vue'"
---
  <%=name%>,