// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOoQcw9NLaeL81OKdWaBcBNz3yni06iyE",
  authDomain: "reactcourse-6be57.firebaseapp.com",
  projectId: "reactcourse-6be57",
  storageBucket: "reactcourse-6be57.appspot.com",
  messagingSenderId: "878530940914",
  appId: "1:878530940914:web:096bc8f683eacebd6ca56b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );