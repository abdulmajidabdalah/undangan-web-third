// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyASQTJs4xxe9GMHFosVSfo2tzroRdWMcxA",

  authDomain: "undangan-three.firebaseapp.com",

  projectId: "undangan-three",

  storageBucket: "undangan-three.appspot.com",

  messagingSenderId: "23194107645",

  appId: "1:23194107645:web:603e6babc73a3becc44894"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
