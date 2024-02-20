import { fileURLToPath } from 'node:url'
import { renameSync } from 'node:fs'
const toRename = fileURLToPath(import.meta.url).replace(
  /scripts\/rename-types-dir.mjs$/,
  'dist/src'
)
renameSync(toRename, toRename.replace('src', 'types'))
