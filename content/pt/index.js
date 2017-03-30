const _ = require('lodash')

const header = require('./header')
const footer = require('./footer')
const services = require('./services')
const about = require('./about')
const portfolio = require('./portfolio')

module.exports = _.assign(
  { header },
  { footer },
  { services },
  { portfolio },
  { about }
)
