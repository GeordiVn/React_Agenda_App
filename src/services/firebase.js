import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    projectId: process.env.VITE_REACT_APP_FIREBASE_PROJECT_ID
};

console.log(process.env.VITE_REACT_APP_FIREBASE_PROJECT_ID);
console.log(process.env);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(firebaseApp);
console.log("initialized firebase connection");