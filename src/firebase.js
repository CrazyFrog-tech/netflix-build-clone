// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM-pxlV2_7N7ePo4zGIWARnY4tNUSOAVQ",
  authDomain: "netflix-build-ab65d.firebaseapp.com",
  projectId: "netflix-build-ab65d",
  storageBucket: "netflix-build-ab65d.appspot.com",
  messagingSenderId: "1075424254464",
  appId: "1:1075424254464:web:e5a6b04ff1a2f0f16d56e5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export {auth};
export default db;