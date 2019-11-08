import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase";
import "firebase/auth";

// Basic firebase configuration linking web application to database - see firebase documentation
const firebaseConfig = {
  apiKey: "AIzaSyCOrvc1c62yeFHDfoUDGtS0Eurt-FA7IMA",
  authDomain: "mirrors-4e598.firebaseapp.com",
  databaseURL: "https://mirrors-4e598.firebaseio.com",
  projectId: "mirrors-4e598",
  storageBucket: "mirrors-4e598.appspot.com",
  messagingSenderId: "451773595635",
  appId: "1:451773595635:web:e2bf1b39ed5c798f28dc86",
  measurementId: "G-DGPDL4SGWT"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
