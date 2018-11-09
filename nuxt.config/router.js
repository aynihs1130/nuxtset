/**
 * @file nuxt.config.
 * router周りのconfig
 */
module.exports = {
  router: {

    // rootが変わったときに常に呼び出される。
    middleware: [
      // ページ遷移時にstateを書き換え
      'set_page'
    ],

    // カスタムルーター
    extendRoutes(routes, resolve) {
    },

    // 遷移時のスクロール挙動
    // plan-detailからの遷移時はなにもしない。
    scrollBehavior(to, from, saved_position){
      let position = false

      if (to.matched.length < 2) {
        position = { x: 0, y: 0 }
      } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
        position = { x: 0, y: 0 }
      }

      if (saved_position) {
        position = saved_position
      }

      return new Promise(resolve => {
        window.$nuxt.$once('triggerScroll', () => {
          if (to.hash && document.querySelector(to.hash)) {
            position = { selector: to.hash }
          }
          resolve(position)
        })
      })
    }

  }
}
