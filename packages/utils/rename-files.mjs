import fs from 'fs'
// import { fileURLToPath, URL } from 'node:url'

// const path = fileURLToPath(new URL('./', import.meta.url))

export function getAllFilesAndFoldersRecursively(path, ignore = []) {
  path = path.replace(/\/$/, '')
  const files = fs.readdirSync(path)
  const filesAndFolders = files.map((file) => {
    const fullPath = `${path}/${file}`
    const stats = fs.statSync(fullPath)

    // remove ignored files and folders
    if (ignore.includes(file)) {
      return []
    }

    if (stats.isDirectory()) {
      return getAllFilesAndFoldersRecursively(fullPath, ignore)
    } else {
      return fullPath
    }
  })

  return filesAndFolders.flat()
}

export function findAndReplaceFileAndFolderNamesRecursively(find, replace, path, ignore = []) {
  let renamed = []
  path = path.replace(/\/$/, '')
  const files = fs.readdirSync(path)
  files.map((file) => {
    const fullPath = `${path}/${file}`
    const stats = fs.statSync(fullPath)

    // remove ignored files and folders
    if (ignore.includes(file)) {
      return []
    }

    // rename the file or folder
    const newFullPath = fullPath.replace(find, replace)
    if (fullPath !== newFullPath) {
      fs.renameSync(fullPath, newFullPath)
      renamed.push({
        old: fullPath,
        new: newFullPath
      })
    }

    if (stats.isDirectory()) {
      renamed = [
        ...renamed,
        ...findAndReplaceFileAndFolderNamesRecursively(find, replace, newFullPath, ignore)
      ]
      return renamed
    }
  })

  return renamed
}

// console.log(
//   findAndReplaceFileAndFolderNamesRecursively(/Daisy/, 'Dude', path, ['node_modules', '.git'])
// )
