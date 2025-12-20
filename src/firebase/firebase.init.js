// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiohXuVBo4spvHP3-eHPxQnURNGr0g7Sk",
  authDomain: "sample-project-a1836.firebaseapp.com",
  projectId: "sample-project-a1836",
  storageBucket: "sample-project-a1836.firebasestorage.app",
  messagingSenderId: "633538146406",
  appId: "1:633538146406:web:9f23eb9ec65444faa73da7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
