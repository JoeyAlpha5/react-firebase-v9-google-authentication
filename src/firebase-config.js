import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // add your firebase config
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);