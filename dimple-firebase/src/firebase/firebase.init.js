// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkGloM59dCnFjABCwdgaLRvh-Gz4YVlPw",
  authDomain: "dimple-firebase-e0494.firebaseapp.com",
  projectId: "dimple-firebase-e0494",
  storageBucket: "dimple-firebase-e0494.firebasestorage.app",
  messagingSenderId: "68944823501",
  appId: "1:68944823501:web:923abae6e698265a991584",
  measurementId: "G-B5M97CR4YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
