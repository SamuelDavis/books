import store, { mutations } from './../store.js'
import { db } from './../firebase.js'

export default {
  template: '#bookshelf-template',
  store,
  data () {
    return { books: [{ id: 'idfoobar', title: 'Foo', author: 'bar', publishedAt: 2019 }] }
  },
  created () {
    db
      .collection('books')
      .orderBy('title')
      .limit(10000)
      .get()
      .then((result) => this.books = result.docs.map((doc) => doc.data()));
  },
  methods: {
    openBook (book) {
      this.$store.commit(mutations.openBook.name, book)
    }
  }
}