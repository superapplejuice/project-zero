/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path')

module.exports = {
  client: {
    includes: [join(__dirname, '../src/resolvers/mutations/**')],
    service: {
      name: 'mutations',
      url: 'http://localhost:5000',
    },
  },
}
