import { auth, googleProvider } from './../firebase.js'
import store from './../store.js'

export default {
  template: '#auth-template',
  store,
  computed: {
    user: {
      get () { return this.$store.getters.authUser }
    }
  },
  methods: {
    signIn () {
      auth.signInWithPopup(googleProvider)
    },
    signOut () {
      auth.signOut()
    }
  }
}