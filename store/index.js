import Vue from 'vue'
import Vuex from 'vuex'

import HeaderMenu from './HeaderMenu.js'
import CommonProps from './CommonProps.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    HeaderMenu,
    CommonProps
  }
})

export default function() {return store}
