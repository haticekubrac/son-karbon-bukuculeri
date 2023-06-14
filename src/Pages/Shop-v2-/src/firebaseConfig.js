// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "exampleAPIKey",
  authDomain: "cw-shop-v2.firebaseapp.com",
  projectId: "cw-shop-v2",
  storageBucket: "cw-shop-v2.appspot.com",
  messagingSenderId: "exampleId",
  appId: "exampleAppId"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
