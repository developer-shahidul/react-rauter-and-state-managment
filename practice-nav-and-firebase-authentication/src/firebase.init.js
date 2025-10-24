// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKbjOu_n1_3a13Mk2TG1sJ979ag6lj_94",
  authDomain: "practice-firebase-11.firebaseapp.com",
  projectId: "practice-firebase-11",
  storageBucket: "practice-firebase-11.firebasestorage.app",
  messagingSenderId: "380553976071",
  appId: "1:380553976071:web:cc53a97c6f41b9aa69cda2",
  measurementId: "G-2J9G92BP6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
