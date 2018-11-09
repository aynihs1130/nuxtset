/**
 * @file nuxt.config.
 * head周りのconfig
 */
const title = '';
const description = '';

module.exports = {
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content:'none' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
};
