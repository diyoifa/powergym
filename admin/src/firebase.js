// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQSNmycTRLBPVuVDHY6-CVS3EnJZRjTd0",
  authDomain: "powergym-431f4.firebaseapp.com",
  projectId: "powergym-431f4",
  storageBucket: "powergym-431f4.appspot.com",
  messagingSenderId: "594425849510",
  appId: "1:594425849510:web:c8aa030060d733a6213667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app