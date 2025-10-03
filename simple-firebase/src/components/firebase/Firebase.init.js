// do not store config not the client side
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBR3VS6GNZiXWmwSExSaWdNECGctG7B7w",
  authDomain: "simple-firebase-2525.firebaseapp.com",
  projectId: "simple-firebase-2525",
  storageBucket: "simple-firebase-2525.firebasestorage.app",
  messagingSenderId: "670507960237",
  appId: "1:670507960237:web:8e543071211673fad08324",
  measurementId: "G-GZZLE7ZYRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
