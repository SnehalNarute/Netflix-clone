import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from "../seed";

// seed the database

// config
const config = {
  apiKey: "AIzaSyA5PRrRpeolyGZnZcsm8cwNQ6h181pFi1g",
  authDomain: "netflix-clone04.firebaseapp.com",
  projectId: "netflix-clone04",
  storageBucket: "netflix-clone04.appspot.com",
  messagingSenderId: "728156552131",
  appId: "1:728156552131:web:c3ffdb6de3b517d40adb76"
};

const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);
export { firebase };
