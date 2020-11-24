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
  measurementId: "G-FV0NFL3RS8",
};

export const createUserProfileDocument = async (userAuth, additionaldata) => {
  if (!userAuth) return; // check if userAuth is null (is not login) we dont want to create new user hence return
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // check if user is already on database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldata,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
