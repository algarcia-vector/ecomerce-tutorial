import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDPuNqhGxY5o8qgyXUjZZV1vR8xDYLWm-w",
  authDomain: "crwn-db-41e86.firebaseapp.com",
  projectId: "crwn-db-41e86",
  storageBucket: "crwn-db-41e86.appspot.com",
  messagingSenderId: "104349445698",
  appId: "1:104349445698:web:e28c4d32c45dbc473f47db",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
