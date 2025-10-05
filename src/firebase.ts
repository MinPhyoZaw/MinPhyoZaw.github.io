// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8HHUcz6ien19CGBxesZl0_o1Fff8nS3s",
  authDomain: "product-items-49dc5.firebaseapp.com",
  projectId: "product-items-49dc5",
  storageBucket: "product-items-49dc5.firebasestorage.app",
  messagingSenderId: "861279606931",
  appId: "1:861279606931:web:8e15a2ba520d1014e71566"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Messages collection reference
export const messagesCollection = collection(db, "chat_messages");
