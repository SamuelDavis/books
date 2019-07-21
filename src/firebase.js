import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase } from './storage.js';

const firebaseConfig = getFirebase();

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
