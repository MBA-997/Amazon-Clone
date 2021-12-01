// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZAdDO0Aiw-ew8hja8m9UD3CjUA24u1p0",
  authDomain: "clone-d65a4.firebaseapp.com",
  projectId: "clone-d65a4",
  storageBucket: "clone-d65a4.appspot.com",
  messagingSenderId: "633819245845",
  appId: "1:633819245845:web:ab29c6d2442116ae82cd1c",
  measurementId: "G-JE17YRBQ2P",
  homepage: "https://clone-d65a4.web.app",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
