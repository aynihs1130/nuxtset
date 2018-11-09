/**
 * @file nuxt.config.
 * module周りのconfig
 */
module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],

  //- setup axios module.
  axios: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
