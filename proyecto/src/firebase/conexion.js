import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAYU3EISOcWUdmA8VOme4FGrjIRbioVoWA",
  authDomain: "haps-bb2ad.firebaseapp.com",
  projectId: "haps-bb2ad",
  storageBucket: "haps-bb2ad.appspot.com",
  messagingSenderId: "716521027650",
  appId: "1:716521027650:web:44c73ba5621121be0d55db",
  measurementId: "G-Y3GZBV74W6",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore;
