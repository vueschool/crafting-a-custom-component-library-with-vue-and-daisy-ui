---
inject: true
to: packages/library/package.json
before: "./do-not-touch-replaced-by-hygen"
skip_if: "./<%= h.componentNameNoPrefix(name) %>"
---
    "./<%= h.componentNameNoPrefix(name) %>": {
      "import": "./src/components/<%= h.componentNameWithPrefix(name) %>/<%= h.componentNameWithPrefix(name) %>.vue",
      "require": "./src/components/<%= h.componentNameWithPrefix(name) %>/<%= h.componentNameWithPrefix(name) %>.vue"
    },