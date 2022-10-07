// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhpQz2vG77VJ5f8NRQX_mM_8Jq2JjIEyA",
  authDomain: "vico404notfoundblog.firebaseapp.com",
  projectId: "vico404notfoundblog",
  storageBucket: "vico404notfoundblog.appspot.com",
  messagingSenderId: "656004078714",
  appId: "1:656004078714:web:83fb0bf9dddf66d2d72fc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
