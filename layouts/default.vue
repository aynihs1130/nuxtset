<template lang="pug">
  #wrap(:class="`is-${current}`")
    SiteHeader

    SiteNav

    main#main-content
      nuxt

    SiteFooter

    DelayWindow

</template>

<script>

/**
 * @file vue Layout file.
 */
import {mapState} from 'vuex'

import SiteHeader from '~/components/header'
import SiteFooter from '~/components/footer'
import SiteNav from '~/components/nav'
import DelayWindow from '~/components/delay_window'

export default {
  components: {
    SiteHeader,
    SiteNav
  },

  data(){
    return {
      scroll_top: 0
    }
  },

  computed: {
    ...mapState(['is_scroll']),

    current(){

      switch(this.$route.name){
        case 'index':
          return 'index'

        default:
          return 'other'

      }
    },

  },

  watch: {
    'is_scroll': 'setScroll'
  },

  methods: {
    /**
    * ページのスクロールを制御.
    * トリガーはstateのis_scroll
    */
    setScroll(){
      if(!process.browser) { return }

      if(!this.is_scroll) {
        let sc = this.scroll_top = document.documentElement.scrollTop
        document.documentElement.scrollTop = 0
        this.$el.classList.add('no-scroll')
        this.$el.style.top = `-${sc}px`

      }else {
        this.$el.classList.remove('no-scroll')
        document.documentElement.scrollTop = this.scroll_top
        this.$el.style.top = ''
        this.scroll_top = false
      }

    }
  }

}

</script>

<style lang="stylus" scoped>
  #wrap
    &.no-scroll
      position fixed
      width 100%
      left 0
</style>
