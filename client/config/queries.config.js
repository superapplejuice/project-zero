/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path')

module.exports = {
  client: {
    includes: [join(__dirname, '../src/resolvers/queries/**')],
    service: {
      name: 'queries',
      url: 'http://localhost:5000',
    },
  },
}
