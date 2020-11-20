import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBLOlhw3j_L3nIar_vPtGOMq7q2pEOY6CM",
    authDomain: "zoith-db.firebaseapp.com",
    databaseURL: "https://zoith-db.firebaseio.com",
    projectId: "zoith-db",
    storageBucket: "zoith-db.appspot.com",
    messagingSenderId: "659150903382",
    appId: "1:659150903382:web:3a2a7ae6189576b43783f7",
    measurementId: "G-FV0NFL3RS8"
  };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;