// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKI0kOi54HkkhJjVKULgOaHNAi0zMW53k",
  authDomain: "netflixgpt-13bdf.firebaseapp.com",
  projectId: "netflixgpt-13bdf",
  storageBucket: "netflixgpt-13bdf.firebasestorage.app",
  messagingSenderId: "239426093133",
  appId: "1:239426093133:web:9bcba258797ecdae405c04",
  measurementId: "G-V3XP85RDDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
