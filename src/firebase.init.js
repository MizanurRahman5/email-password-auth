// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2km5msSqgfcWFFWNZzUwzMzrNIEjyIFY",
  authDomain: "email-password-auth-58e04.firebaseapp.com",
  projectId: "email-password-auth-58e04",
  storageBucket: "email-password-auth-58e04.firebasestorage.app",
  messagingSenderId: "546298300293",
  appId: "1:546298300293:web:cb4ab0b0b3164b3f1366ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;