// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuErw01CTWkmSubQF7nbcC2kfNqN5dP8g",
  authDomain: "gratily.firebaseapp.com",
  projectId: "gratily",
  storageBucket: "gratily.firebasestorage.app",
  messagingSenderId: "210662488776",
  appId: "1:210662488776:web:d061bb0f45a4b8a61ac3fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
