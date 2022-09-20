// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA1crvjlKVKQWz8-yqXB_UycWSdQpW-WI",
  authDomain: "realtor-clone-eea7d.firebaseapp.com",
  projectId: "realtor-clone-eea7d",
  storageBucket: "realtor-clone-eea7d.appspot.com",
  messagingSenderId: "825784040514",
  appId: "1:825784040514:web:1f501b3bea608d542781db",
  measurementId: "G-PZ7K40WF7X",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
