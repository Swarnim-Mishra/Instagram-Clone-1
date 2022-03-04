import firebase from "firebase/app";
import firebaseConfig from "/credentials.js";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
