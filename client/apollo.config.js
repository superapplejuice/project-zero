module.exports = {
  client: {
    service: {
      name: 'zero@dev',
      url: 'http://localhost:5000',
    },
  },
  includes: [
    './src/resolvers/mutations/**/*.ts',
    './src/resolvers/queries/**/*.ts',
  ],
}
