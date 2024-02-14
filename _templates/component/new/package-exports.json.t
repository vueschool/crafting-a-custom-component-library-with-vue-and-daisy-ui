---
inject: true
to: packages/library/package.json
before: "./do-not-touch-replaced-by-hygen"
skip_if: "./<%=name%>"
---
    "./<%=name%>": {
      "import": "./src/components/<%=name%>/<%=name%>.vue",
      "require": "./src/components/<%=name%>/<%=name%>.vue"
    },