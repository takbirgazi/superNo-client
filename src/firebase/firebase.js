// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkGOunEI7_JXxsTf4fr5gpjJCH-KFHAyY",
    authDomain: "e-commerce-306bc.firebaseapp.com",
    projectId: "e-commerce-306bc",
    storageBucket: "e-commerce-306bc.firebasestorage.app",
    messagingSenderId: "941798604497",
    appId: "1:941798604497:web:60cfcbc164418fcfa64ff0",
    measurementId: "G-1K947KG16S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;