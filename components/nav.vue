<template lang="pug">
  transition(name="nav")
    nav.g-nav(v-if="is_login")
      ul
        li.mypage: .nav-inner: nuxt-link(to="/")
          .nav-icon: img(src="~/assets/img/mypage.svg" alt="")
          span Myページ

        li.center
          .nav-inner
            a.send(
              @click.prevent="submitInvite"
              :class="((current == 'invite' && !is_open_invite_userlist) ? 'is-active' : 'no-active') + (is_valid ? ' valid' : ' no-valid')"
            )
              .nav-icon: img(src="~/assets/img/send.svg" alt="")
              span 送る

            nuxt-link.invite(to="/invite" :class="current != 'invite' ? 'is-active' : 'no-active'")
              span 誘う
              .nav-icon: img(src="~/assets/img/invite.svg" alt="")

            a.decision(:class="is_open_invite_userlist ? 'is-active' : 'no-active'" @click="setInviteUserlist(false)")
              .nav-icon: img(src="~/assets/img/member.svg" alt="")
              span 決定

        li.member: .nav-inner: nuxt-link(to="/member")
          .nav-icon: img(src="~/assets/img/member.svg" alt="")
          span メンバー

</template>

<script>
/**
 * @file Compornent.
 * ナビゲーション コンポーネント
 */
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'is_login',
      'current_page',
      'is_open_invite_userlist',
      'is_valid'
    ]),

    current(){

      switch(this.current_page){
        case 'index':
        case 'plan-detail':
          return 'index'

        case 'invite':
        case 'invite-edit':
          return 'invite'

        case 'member':
          return 'member'

        default:
          return ''

      }
    }
  },

  methods: {
    ...mapMutations(['submitInvite', 'setInviteUserlist'])
  }
}
</script>

<style lang="stylus" scoped>

.g-nav
  position fixed
  bottom -200px
  padding-bottom 200px
  left 0
  width 100%
  background #ffd460
  transition transform .3s ease-out
  text-align center
  z-index 30

  &.nav-enter-to
    transform translate3d(0, 0, 0)

  &.nav-enter
    transform translate3d(0, 100%, 0)

  a
    color #fff
    display block

  ul
    max-width 750px
    margin 0 auto
    position relative
    &:after
      content ''
      clear both
      display block
      visibility hidden
      height 0
    li
      width 33.333%

    .nav-inner
      line-height 1
      font-size 1px

    .nav-icon
      margin 0 auto

    span
      font-size unit(26 / 750 * 100, 'vw')

      @media all and (min-width: 750px)
        font-size 26px

  .mypage, .member
    .nav-icon
      margin-bottom 2.8%
    a
      padding 6.3% 0 1.6%
      &.nuxt-link-exact-active
        opacity .5

  .center
    position absolute
    top 0
    left 50%
    transform translate3d(-50%, -50%, 0)

    .nav-inner
      background #ffd460
      width unit(166 / 250 * 100 , '%')
      padding-top unit(166 / 250 * 100 , '%')
      height 0
      border-radius 50%
      transform translate3d(-50%, -30%, 0)
      position absolute
      top 0
      left 50%
      a
        position absolute
        top 0
        margin-top unit(8 / 166 * 100 , '%')
        left unit(8 / 166 * 100 , '%')
        background #FF9157
        box-sizing content-box
        display block
        border-radius 50%
        //transition width .3s ease-out, height .3s ease-out
        transition transform .3s ease-out, opacity .5s ease-out
        width unit(150 / 166 * 100 , '%')
        padding-top unit(150 / 166 * 100 , '%')
        backface-visibility hidden

        &.no-valid
          opacity .5

        &.valid
          opacity 1

    .nav-icon, span
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)
      display inline-block
      backface-visibility hidden

    span
      margin-top 32%
      display inline-block
      backface-visibility hidden

  .mypage
    float left
    .nav-icon
      width unit(50 / 250 * 100 , '%')

  .member
    float right
    .nav-icon
      width unit(96 / 250 * 100 , '%')

  .invite
    .nav-icon
      width unit(94 / 150 * 100 , '%')
      margin-top -10%

  .send
    .nav-icon
      width unit(80 / 150 * 100 , '%')
      margin-top -10%

  .decision
    .nav-icon
      width unit(90 / 150 * 100 , '%')
      margin-top -8%

  .no-active
    transform scale(0)

  .is-active
    transform scale(1)


</style>
