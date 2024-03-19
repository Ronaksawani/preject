import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBPdcCzBOKzrtYo2AI5KrY_0pQLQTy5OQ",
  authDomain: "dailypunch-76518.firebaseapp.com",
  projectId: "dailypunch-76518",
  storageBucket: "dailypunch-76518.appspot.com",
  messagingSenderId: "1089786315359",
  appId: "1:1089786315359:web:88ac3d24c86df25ba211ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Set authentication persistence

export { app, db };
