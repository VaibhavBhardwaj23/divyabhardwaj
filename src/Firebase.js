import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0uCjzgTtC6s_TKkGj8lZxyQ_J2W7f1os",
  authDomain: "divyabhardwaj-55183.firebaseapp.com",
  projectId: "divyabhardwaj-55183",
  storageBucket: "divyabhardwaj-55183.appspot.com",
  messagingSenderId: "370419363836",
  appId: "1:370419363836:web:98334490f7d41dc38c0c79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);