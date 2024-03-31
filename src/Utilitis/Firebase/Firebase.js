// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvNpSiVDLTXjc4JnobStrUSyrX0pxjgBQ",
    authDomain: "email-password-validatio-d6f2a.firebaseapp.com",
    projectId: "email-password-validatio-d6f2a",
    storageBucket: "email-password-validatio-d6f2a.appspot.com",
    messagingSenderId: "296497998873",
    appId: "1:296497998873:web:31185291da8aa47b670e88"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;