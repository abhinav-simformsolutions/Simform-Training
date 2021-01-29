import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCAgb09NSscuHzlSp1c9XMjh-uM7TT7fSk",
  authDomain: "messaging-6db6e.firebaseapp.com",
  projectId: "messaging-6db6e",
  storageBucket: "messaging-6db6e.appspot.com",
  messagingSenderId: "32963437353",
  appId: "1:32963437353:web:ef6f2f0350252b44b4cd38",
  measurementId: "G-P97QDN364N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;