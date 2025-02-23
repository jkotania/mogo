// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAUKScHL7_mcmN0OcVEKvw1Ax_NnopjUk",
  authDomain: "mogo-d5934.firebaseapp.com",
  projectId: "mogo-d5934",
  storageBucket: "mogo-d5934.appspot.com",
  messagingSenderId: "636196953383",
  appId: "1:636196953383:web:4402ece2ac8728eb97dd02",
  measurementId: "G-TX6ZXJ3PDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicjalizacja Firestore i Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
