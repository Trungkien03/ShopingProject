// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJ7hqpC2Yxfvc-wl4n9VunfCPZxPKvjk4",
  authDomain: "shoppingproject-becb7.firebaseapp.com",
  projectId: "shoppingproject-becb7",
  storageBucket: "shoppingproject-becb7.appspot.com",
  messagingSenderId: "143094679932",
  appId: "1:143094679932:web:51ca8047426c7627cabcf9",
  measurementId: "G-BH69Q4XBQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();