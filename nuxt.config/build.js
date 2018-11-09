/**
 * @file nuxt.config.
 * build周りのconfig
 */

const path = require('path');

module.exports = {

  build: {
    publicPath: '/assets/',
    extractCSS: true,
    vendor: ['axios', 'lodash'],
    babel: {
      presets:['vue-app', 'es2015', 'stage-2'],

      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true
        }]
      ]
    },

    optimization: {
      splitChunks: {
        name: true
      }
    },

    performance: { hints: false },

    resolve: {
      extensions: ['.js', '.json', '.vue', '.ts'],
      alias: {
        '@': path.resolve(process.cwd()),
        '~': path.resolve(process.cwd())
      },
      modules: [
        path.resolve(process.cwd())
      ]
    }
  }
}
