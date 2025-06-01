// Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVlTGXAk4ftyF1jXRstm0c7HXTyePoJoo",
  authDomain: "testgh-590e6.firebaseapp.com",
  projectId: "testgh-590e6",
  storageBucket: "testgh-590e6.appspot.com",
  messagingSenderId: "883436557490",
  appId: "1:883436557490:web:e80365f76318431781a5ab",
  measurementId: "G-8PZRKK8MKS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };