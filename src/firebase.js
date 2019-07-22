import { getFirebase } from './storage.js'

const firebaseConfig = getFirebase()

window.firebase.initializeApp(firebaseConfig)
window.firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export const auth = window.firebase.auth()
export const googleProvider = new window.firebase.auth.GoogleAuthProvider()
export const db = window.firebase.firestore()
db.settings({ timestampsInSnapshots: true })
