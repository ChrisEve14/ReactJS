import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAgB0_DYq-U9fab_BRhZcs8UKxokWJfRZg",
  authDomain: "wineandpalette-7e2b9.firebaseapp.com",
  projectId: "wineandpalette-7e2b9",
  storageBucket: "wineandpalette-7e2b9.appspot.com",
  messagingSenderId: "51784300941",
  appId: "1:51784300941:web:4c60472bae75e4c1a4e5c4"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)