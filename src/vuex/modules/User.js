export default {
  namespaced: 'User',
  state: {
    id: '',
    name: '',
    avatar: '',
    email: '',
    phone: '',
    sex: ''
  },
  mutations: {
    'SET_ID' (state, payload) {
      state.id = payload
    },
    'SET_NAME' (state, payload) {
      state.name = payload
    },
    'SET_AVATAR' (state, payload) {
      state.avatar = payload
    },
    'SET_EMAIL' (state, payload) {
      state.email = payload
    },
    'SET_PHONE' (state, payload) {
      state.phone = payload
    },
    'SET_SEX' (state, payload) {
      state.sex = payload
    }
  },
  actions: {
    login ({dispatch, commit}, payload) {
      const user = payload.userInfo
      commit('SET_ID', user.id)
      commit('SET_NAME', user.realname)
      commit('SET_AVATAR', user.avatar)
      commit('SET_EMAIL', user.email)
      commit('SET_PHONE', user.phone)
      commit('SET_SEX', user.sex)
      dispatch('App/setToken', payload.token, {root: true})
      dispatch('App/signIn', null, {root: true})
    }
  }
}
