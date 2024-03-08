
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfDRjf2a7iJAFG3vITdCj9f2Ookr74ROE",
  authDomain: "react-notes-gs.firebaseapp.com",
  projectId: "react-notes-gs",
  storageBucket: "react-notes-gs.appspot.com",
  messagingSenderId: "327325891341",
  appId: "1:327325891341:web:dd7274ca9bff72f0348e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const notesCollection = collection(db, "notes")
const newCollection = collection(db, "anotherNotes2")

