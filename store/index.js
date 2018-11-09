/**
 * @file vuex store.
 */

import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const store = () => new Vuex.Store({
  strict: false,
  state: state(),
  actions,
  getters,
  mutations
})

export const strict = false
export default store
