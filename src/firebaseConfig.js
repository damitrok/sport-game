import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUiBxqmjaqHfCLDUDuZj8q3MF5NXbHL4U",
  authDomain: "gymrpg-b6ab6.firebaseapp.com",
  projectId: "gymrpg-b6ab6",
  storageBucket: "gymrpg-b6ab6.firebasestorage.app",
  messagingSenderId: "431397375365",
  appId: "1:431397375365:web:f7d08bb0cbf428028308ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

