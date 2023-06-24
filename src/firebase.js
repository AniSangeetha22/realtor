// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEn553uBcTLDLUYhMi8JMkqbytllWB_1c",
  authDomain: "realtor-react-7a113.firebaseapp.com",
  projectId: "realtor-react-7a113",
  storageBucket: "realtor-react-7a113.appspot.com",
  messagingSenderId: "50064786798",
  appId: "1:50064786798:web:e471f5ec624ddeff3ead7f"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();