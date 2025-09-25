// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeYni6pX-M1ISBdTt2dOksZziKZsK-7Ok",
  authDomain: "ott-gpt-debjeet.firebaseapp.com",
  projectId: "ott-gpt-debjeet",
  storageBucket: "ott-gpt-debjeet.firebasestorage.app",
  messagingSenderId: "900370558221",
  appId: "1:900370558221:web:ce45406741f44c7aaa5444",
  measurementId: "G-CGVV6D6PK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);