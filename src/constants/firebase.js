
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBXTTDyFpRGopa8M5psIsi6r8oy0lRg52M",
    authDomain: "habeshastore-25335.firebaseapp.com",
    databaseURL: "https://habeshastore-25335-default-rtdb.firebaseio.com",
    projectId: "habeshastore-25335",
    storageBucket: "habeshastore-25335.appspot.com",
    messagingSenderId: "4871407444",
    appId: "1:4871407444:web:e2bffa4e53b5874a892ac1",
    measurementId: "G-LDVYM9W77G"
};

const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);

export const auth = getAuth(app);

export const firestore = getFirestore(app)

export const userRef = collection(firestore, "Users");
