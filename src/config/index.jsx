import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQY1qh7UAEBAT6IozgAfuZrGVGOsIIT9I",
    authDomain: "app-1-a67e1.firebaseapp.com",
    projectId: "app-1-a67e1",
    storageBucket: "app-1-a67e1.appspot.com",
    messagingSenderId: "253115058209",
    appId: "1:253115058209:web:a898b1d0a474f3478b7b60"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

