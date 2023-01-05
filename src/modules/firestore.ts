import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firestore = initializeApp({
  appId: import.meta.env.VITE_APP_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  storageBucket: import.meta.env.VITE_STORGE_BUCKET,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
});

const database = getFirestore(firestore);

export default database;
