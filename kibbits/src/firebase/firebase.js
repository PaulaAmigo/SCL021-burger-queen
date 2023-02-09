// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuyXzmV74eWDHolfEDQyHYUNDmRt1L9m0",
  authDomain: "kibbits-a619a.firebaseapp.com",
  projectId: "kibbits-a619a",
  storageBucket: "kibbits-a619a.appspot.com",
  messagingSenderId: "1008843419378",
  appId: "1:1008843419378:web:6eb9bd3302a0379c546a6b",
  measurementId: "G-24B5X7K4G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const createOrder = async order => {
  let clientName = document.getElementById("clientName").value;
  let table = document.getElementById("table").value;
  let comments = document.getElementById("comments").value;
  try {
    const docRef = await addDoc(collection(db, "order"), {
      order,
      clientName,
      table,
      comments
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
