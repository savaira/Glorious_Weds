import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD6flLc2coQOIQGamL5WjK-Z_c7hr5fzew",
  authDomain: "glorious-46094.firebaseapp.com",
  projectId: "glorious-46094",
  storageBucket: "glorious-46094.appspot.com",
  messagingSenderId: "846950115876",
  appId: "1:846950115876:web:b40f1373c59b58666846b1"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default db;
export {firebaseApp};

  