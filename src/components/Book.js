import store from './../store.js'
import { db } from '../firebase.js'

export default {
  template: '#book-template',
  store,
  data () {
    return {
      blocks: []
    }
  },
  created () {
    const getBlocks = (fromDoc) => {
      let query = db
        .collection('blocks')
        .where('bookId', '==', this.$store.getters.openedBook.id)
        .orderBy('page')
        .orderBy('index')
        .limit(10000)
      if (fromDoc) {
        query = query.startAfter(fromDoc)
      }
      query
        .get()
        .then((documentSnapshots) => {
          console.log(documentSnapshots)
          documentSnapshots.docs.forEach((doc) => this.blocks.push(doc.data()))
          const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
          if (lastVisible) getBlocks(lastVisible)
        })
    }

    getBlocks()
  }
}