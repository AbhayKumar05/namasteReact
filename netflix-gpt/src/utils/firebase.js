// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHeNlkwzEohmQJ_L54QwEtlWykxB2mqPk",
  authDomain: "netflix-gpt-a5833.firebaseapp.com",
  projectId: "netflix-gpt-a5833",
  storageBucket: "netflix-gpt-a5833.firebasestorage.app",
  messagingSenderId: "453582158874",
  appId: "1:453582158874:web:0c6d51950291c62abb65a3",
  measurementId: "G-XLXCMVVS9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
