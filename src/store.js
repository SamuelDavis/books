const state = {
  user: undefined,
  openedBook: undefined
}
export const mutations = {
  setAuth (state, user) {
    state.user = user
  },
  openBook (state, book) {
    state.openedBook = book
  },
  closeBook (state) {
    state.openedBook = null
  }
}
const getters = {
  authUser (state) {
    return state.user
  },
  openedBook (state) {
    return state.openedBook
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
})

firebase.auth().onAuthStateChanged((authed) => store.commit(mutations.setAuth.name, authed))

export default store