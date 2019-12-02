import Vue from 'vue'
import Vuex from 'vuex'
import App from './modules/App'
import User from './modules/User'

Vue.use(Vuex)

function handleStore (store) {
  const key = 'VuexCache'
  const cache = localStorage.getItem(key)
  if (cache) {
    store.replaceState(JSON.parse(cache))
  }
  store.subscribe((mutation, state) => {
    localStorage.setItem(key, JSON.stringify(state))
  })
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    App,
    User
  },
  plugins: [handleStore]
})
