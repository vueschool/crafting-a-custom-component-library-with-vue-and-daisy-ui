---
inject: true
to: packages/library/package.json
before: "./do-not-touch-replaced-by-hygen"
skip_if: "./<%=name.replace(/^Daisy/i, '')%>"
---
    "./<%=name.replace(/^Daisy/i, '')%>": {
      "import": "./src/components/<%=name%>/<%=name%>.vue",
      "require": "./src/components/<%=name%>/<%=name%>.vue"
    },