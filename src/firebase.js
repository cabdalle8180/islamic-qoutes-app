// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkBtYrX9DjkIDe-dIt9q2tE5hJV1IGjNQ",
  authDomain: "quotesapp-f7453.firebaseapp.com",
  projectId: "quotesapp-f7453",
  storageBucket: "quotesapp-f7453.appspot.com",
  messagingSenderId: "434364429193",
  appId: "1:434364429193:web:23eb7e087cbc133c342758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };