import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD_x60Md2MhHbI8VNgsQD4_hMxHXtJ5qI",
  authDomain: "diariobd-abdc6.firebaseapp.com",
  projectId: "diariobd-abdc6",
  storageBucket: "diariobd-abdc6.appspot.com",
  messagingSenderId: "39609118290",
  appId: "1:39609118290:web:46cb17a5254415aec8b98b"
};

const app = initializeApp(firebaseConfig);
export const firestore  = getFirestore(app);
export const auth = getAuth(app);
