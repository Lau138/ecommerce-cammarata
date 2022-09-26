// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Xdk2_vZnOYXqstjeLkuh83KLeRTPewA",
  authDomain: "ecommerce-cammarata.firebaseapp.com",
  projectId: "ecommerce-cammarata",
  storageBucket: "ecommerce-cammarata.appspot.com",
  messagingSenderId: "892844661514",
  appId: "1:892844661514:web:587c10808073a989b878f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Database
export const db = getFirestore(app)
