import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import storage from './storage.js';

var firebaseConfig = storage.getFirebase();

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();