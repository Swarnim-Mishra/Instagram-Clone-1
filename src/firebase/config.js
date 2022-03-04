import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPGN00hQkkwW3RLeW2mNVSjsLIIHJnfhY",
  authDomain: "instagram-best-fe658.firebaseapp.com",
  projectId: "instagram-best-fe658",
  storageBucket: "instagram-best-fe658.appspot.com",
  messagingSenderId: "364014418335",
  appId: "1:364014418335:web:db7bd96f263995d38525aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

content_copy


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
