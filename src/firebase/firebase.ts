import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "quizer-be083.firebaseapp.com",
  projectId: "quizer-be083",
  storageBucket: "quizer-be083.firebasestorage.app",
  messagingSenderId: "1015304986727",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-S723HM5QYL",
};

export const app = initializeApp(firebaseConfig);
