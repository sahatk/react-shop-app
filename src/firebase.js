// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQqdLF9Ixa0FEYxXp_FEsSdtdm8XBWDcE",
  authDomain: "react-shop-app-b0fd1.firebaseapp.com",
  projectId: "react-shop-app-b0fd1",
  storageBucket: "react-shop-app-b0fd1.firebasestorage.app",
  messagingSenderId: "601900885099",
  appId: "1:601900885099:web:e8ab4cb7c1742aecbc7d2e",
  measurementId: "G-CYCP61NJHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;