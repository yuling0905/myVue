import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
let state = {
  // 页面加载loading
  loading: false,
  // 是否登录
  isSignIn:false,
}
let store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
export default store