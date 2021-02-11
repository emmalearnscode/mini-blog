import Vue from 'vue'
import Vuex from 'vuex'
import BlogModule from "./blogModule.store.js"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BlogModule
  }
})
