<template lang="pug">
  transition(name="delay_window")
    .delay-window(v-if="is_delay_window"): span 読み込み中

</template>

<script>
/**
 * @file Compornent.
 * ローディング コンポーネント
 */
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['is_delay_window'])
  }

}

</script>

<style lang="stylus" scoped>
.delay-window
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  background rgba(255, 255, 255, 0.8)
  text-align center
  transition opacity .2s ease-out

  span
    position absolute
    top 50%
    left 50%
    transform translate3d(-50%, -50%, 0)

  &.delay_window-enter-active
    opacity 1

  &.delay_window-leave-active
    opacity 0

</style>
