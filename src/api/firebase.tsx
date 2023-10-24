// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNabVHtwgeW7dDN9zPa15nXI3d7MhRAps",
    authDomain: "coffee-79788.firebaseapp.com",
    projectId: "coffee-79788",
    storageBucket: "coffee-79788.appspot.com",
    messagingSenderId: "539465703467",
    appId: "1:539465703467:web:163ed68f9ece7756308a6e",
    measurementId: "G-T0T1G2CQKG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();