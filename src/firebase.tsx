// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB5zpLQZUbnbIJANJqyqWAtnDf2c5p9tA",
  authDomain: "contactformsubmission.firebaseapp.com",
  projectId: "contactformsubmission",
  storageBucket: "contactformsubmission.appspot.com",
  messagingSenderId: "374060594981",
  appId: "1:374060594981:web:0b44ad45239a3e6420cccc",
  measurementId: "G-T6K93VLM40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;