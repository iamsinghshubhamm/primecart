import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDWRoKcKhypulQ4nadcrkGMKYpSrGckWw",
  authDomain: "react-ecommerce-a6a8c.firebaseapp.com",
  projectId: "react-ecommerce-a6a8c",
  storageBucket: "react-ecommerce-a6a8c.appspot.com",
  messagingSenderId: "883864488733",
  appId: "1:883864488733:web:dfffe86dac2a513e23aff4"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)
export {fireDB, auth}