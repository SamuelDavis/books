import Toolbar from './components/Toolbar.js'
import Bookshelf from './components/Bookshelf.js'
import Book from './components/Book.js'
import store from './store.js'

export default function () {
  return new window.Vue({
    el: '#app',
    store,
    template: '#app-template',
    components: {
      Toolbar,
      Bookshelf,
      Book
    },
    computed: {
      bookIsOpen: {
        get () {
          return !!this.$store.getters.openedBook
        }
      }
    }
  })
}