// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1HvXQBGNZ9vv0asFOWX3d-LT1N3GDsCo",
  authDomain: "web-undangan-f122a.firebaseapp.com",
  projectId: "web-undangan-f122a",
  storageBucket: "web-undangan-f122a.appspot.com",
  messagingSenderId: "966758689487",
  appId: "1:966758689487:web:75cbf7a00ee7aee48725ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
