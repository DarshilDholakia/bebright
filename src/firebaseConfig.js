import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyA-okrGoul3jyO_9UtcA_PqbcmG-Vxok30",
    authDomain: "bebright-db859.firebaseapp.com",
    projectId: "bebright-db859",
    storageBucket: "bebright-db859.appspot.com",
    messagingSenderId: "96567958183",
    appId: "1:96567958183:web:3db3eb3fffd76c4acf1982",
    // measurementId: <measurementId>,
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;