import firebase from "firebase/compat";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-RM0xrb5kqTsai15iAPqPYKSMyBnMdwE",
    authDomain: "live-video-streaming-aea59.firebaseapp.com",
    projectId: "live-video-streaming-aea59",
    storageBucket: "live-video-streaming-aea59.appspot.com",
    messagingSenderId: "65464365459",
    appId: "1:65464365459:web:76e1f911089f5c1405b866",
    measurementId: "G-8MZ2RXZF0J",
};

firebase.initializeApp(firebaseConfig)
export const auth = getAuth();


