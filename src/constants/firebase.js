// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXTTDyFpRGopa8M5psIsi6r8oy0lRg52M",
  authDomain: "habeshastore-25335.firebaseapp.com",
  databaseURL: "https://habeshastore-25335-default-rtdb.firebaseio.com",
  projectId: "habeshastore-25335",
  storageBucket: "habeshastore-25335.appspot.com",
  messagingSenderId: "4871407444",
  appId: "1:4871407444:web:1f03409b42969dad892ac1",
  measurementId: "G-47NN93LZTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);