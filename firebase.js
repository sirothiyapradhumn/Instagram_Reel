// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGCd4csupemv2J-Dylfv9nNa2rg6uLK6o",
  authDomain: "insta-reel-my.firebaseapp.com",
  projectId: "insta-reel-my",
  storageBucket: "insta-reel-my.appspot.com",
  messagingSenderId: "988031305226",
  appId: "1:988031305226:web:5e9db829b1530be7ce41f3",
  measurementId: "G-MXTV9ZXB8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);

export{ auth, storage, db };