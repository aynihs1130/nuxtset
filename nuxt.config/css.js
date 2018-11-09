/**
 * @file nuxt.config.
 * css周りのconfig
 */
module.exports = {
  css: [{
    src: '~/assets/css/style.styl',
    lang: 'stylus'
  }],

  postcss: [
    require('autoprefixer')({ browsers: ['last 3 versions'] })
  ]
};
