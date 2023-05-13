import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAl0bAGCwjHMH-5spsha9johW8vkb3Mmuk",
    authDomain: "stackoverflow-7b0b8.firebaseapp.com",
    projectId: "stackoverflow-7b0b8",
    storageBucket: "stackoverflow-7b0b8.appspot.com",
    messagingSenderId: "1022224234958",
    appId: "1:1022224234958:web:6fa44882baac73c310139f",
    measurementId: "G-2VW3WCDVVM"
  };

const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();