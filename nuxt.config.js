module.exports = Object.assign(
  {},
  require('./nuxt.config/module'),
  require('./nuxt.config/head'),
  require('./nuxt.config/css'),
  require('./nuxt.config/build'),
  require('./nuxt.config/generate'),
  require('./nuxt.config/router'),
  require('./nuxt.config/manifest')
);
