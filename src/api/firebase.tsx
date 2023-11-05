// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'/../.env' });

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

initializeApp(firebaseConfig);
const Auth = getAuth();

export { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };