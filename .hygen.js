const config = require('./.lib.config.js')
module.exports = {
  helpers: {
    componentNameWithPrefix: (name) => {
      const nameNormalized = name.replace(new RegExp(`^${config.prefix}`, 'i'), '')
      return `${config.prefix}${nameNormalized}`
    },
    componentNameNoPrefix: (name) => {
      return name.replace(new RegExp(`^${config.prefix}`, 'i'), '')
    }
  }
}
