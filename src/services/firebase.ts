// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyArzTqs0DiYt9aYaxPB-LCm8diqbmzgOTM",
  authDomain: "advexer7-9b5f2.firebaseapp.com",
  projectId: "advexer7-9b5f2",
  storageBucket: "advexer7-9b5f2.appspot.com",
  messagingSenderId: "894590997025",
  appId: "1:894590997025:web:ef3ca7c32d4fea90988960"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
