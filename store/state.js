/**
 * @file vuex state.
 */
export default function(){
  let date = moment();

  return {
    url: '',
    current_page: 'index',

    is_delay_window: true,
    is_scroll: true
  }
}
