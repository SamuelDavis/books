import Auth from './Auth.js'
import { getFirebase } from '../storage.js'
import store, { mutations } from '../store.js'

export default {
  template: '#toolbar-template',
  store,
  components: {
    Auth
  },
  computed: {
    openedBook: {
      get () { return this.$store.getters.openedBook }
    }
  },
  methods: {
    copyLink () {
      const input = document.createElement('input')
      input.value = getFirebase(true)
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      alert('Url copied.')
    },
    closeBook () {
      this.$store.commit(mutations.closeBook.name)
    }
  }
}