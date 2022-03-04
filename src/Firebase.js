// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa-v77XPUujBh1trZBI_d_aY-9WnlT5kU",
  authDomain: "travel-in-kg.firebaseapp.com",
  projectId: "travel-in-kg",
  storageBucket: "travel-in-kg.appspot.com",
  messagingSenderId: "140638622897",
  appId: "1:140638622897:web:671f4f6da97cd8328dfe90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
