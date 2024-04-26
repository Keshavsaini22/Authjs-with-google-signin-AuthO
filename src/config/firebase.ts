import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDvOhWEy08oUt41QuUzpW010Mn2SYEy--I",
    authDomain: "ucoe-9c0e8.firebaseapp.com",
    projectId: "ucoe-9c0e8",
    storageBucket: "ucoe-9c0e8.appspot.com",
    messagingSenderId: "887829188798",
    appId: "1:887829188798:web:b53bf3ad8a1f8ba329ceef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();