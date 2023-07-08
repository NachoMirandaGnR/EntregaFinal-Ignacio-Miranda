import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLDu2qk6c9lgSWWY_EWn2qsm0bLlvdz0Y",
  authDomain: "ecommerce-guitarras-6d16c.firebaseapp.com",
  projectId: "ecommerce-guitarras-6d16c",
  storageBucket: "ecommerce-guitarras-6d16c.appspot.com",
  messagingSenderId: "715023565930",
  appId: "1:715023565930:web:241bed3f8440a5a2f43613",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = firebase.firestore();

export { db };
