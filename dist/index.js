
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rjsf-native.cjs.production.min.js')
} else {
  module.exports = require('./rjsf-native.cjs.development.js')
}
