import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPGN00hQkkwW3RLeW2mNVSjsLIIHJnfhY",
  authDomain: "instagram-best-fe658.firebaseapp.com",
  projectId: "instagram-best-fe658",
  storageBucket: "instagram-best-fe658.appspot.com",
  messagingSenderId: "364014418335",
  appId: "1:364014418335:web:db7bd96f263995d38525aa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
