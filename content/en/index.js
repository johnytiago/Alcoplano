const _ = require('lodash')

const header = require('./header')
const footer = require('./footer')
const services = require('./services')
const about = require('./about')

module.exports = _.assign(
  { header },
  { footer },
  { services },
  { about }
)
