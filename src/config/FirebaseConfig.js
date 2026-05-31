import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPwypnxA-wL2NbsWmXXd4IYFMlAmg3OEY",
  authDomain: "vibosmart-377a0.firebaseapp.com",
  projectId: "vibosmart-377a0",
  storageBucket: "vibosmart-377a0.firebasestorage.app",
  messagingSenderId: "1043316177476",
  appId: "1:1043316177476:web:7bf8b76fb1d3db3a119a11",
  measurementId: "G-HZCYJY6VFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
