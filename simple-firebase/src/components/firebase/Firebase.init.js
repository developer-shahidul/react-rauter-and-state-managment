// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// danger: do not share config publicly

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJHSFbXLaFteAj3qNijNFsjtPP9vSrJG8",
  authDomain: "try-this-one-popo.firebaseapp.com",
  projectId: "try-this-one-popo",
  storageBucket: "try-this-one-popo.firebasestorage.app",
  messagingSenderId: "644719948211",
  appId: "1:644719948211:web:6c6ce91c862d9b0c14dbc6",
  measurementId: "G-9W0CMN1B5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { app, analytics, auth };
