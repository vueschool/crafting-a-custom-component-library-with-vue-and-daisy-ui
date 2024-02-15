---
inject: true
to: packages/library/src/components/components.ts
before: "// import - do not remove this line, used for hygen generations"
skip_if: "import <%= h.componentNameWithPrefix(name) %> from './<%= h.componentNameWithPrefix(name) %>/<%= h.componentNameWithPrefix(name) %>.vue'"
---
import <%= h.componentNameWithPrefix(name) %> from './<%= h.componentNameWithPrefix(name) %>/<%= h.componentNameWithPrefix(name) %>.vue'