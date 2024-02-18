// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqFIrK6OQKHjZUq42CFkws6FevJ6xUHDI",
  authDomain: "articlesumz.firebaseapp.com",
  projectId: "articlesumz",
  storageBucket: "articlesumz.appspot.com",
  messagingSenderId: "982500231280",
  appId: "1:982500231280:web:11a57986d9251e63ba8cb5",
  measurementId: "G-Z1C5TEMC4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};