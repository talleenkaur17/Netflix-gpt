// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUug3eN2bEBj99FvNXrhyX_cHNX2dklko",
  authDomain: "netflixgpt-f43fb.firebaseapp.com",
  projectId: "netflixgpt-f43fb",
  storageBucket: "netflixgpt-f43fb.appspot.com",
  messagingSenderId: "307956813843",
  appId: "1:307956813843:web:104d0881c07d1dfc2d6fe6",
  measurementId: "G-RTSLWN1PL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();