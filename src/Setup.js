if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Setup.prod')
} else {
  module.exports = require('./Setup.dev')
}
