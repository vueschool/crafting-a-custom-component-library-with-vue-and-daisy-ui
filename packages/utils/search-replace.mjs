import replace from 'replace-in-file'
const options = {
  files: './**/*',
  from: new RegExp('<Daisy', 'g'),
  to: '<Daisy'
}

try {
  const results = await replace(options)
  console.log(
    'Replacement results:',
    results.filter((result) => result.hasChanged)
  )
} catch (error) {
  console.error('Error occurred:', error)
}
