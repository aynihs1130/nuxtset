/**
 * @file vuex mutations.
 */

export default {
  setPage(state, page){
    state.current_page = page;
  },

  setScroll(state, flg){
    state.is_scroll = flg
  },
  setDelayWindow(state, flg){
    state.is_delay_window = flg;
  }
}
