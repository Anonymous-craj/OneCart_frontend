import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-1a77b.firebaseapp.com",
  projectId: "loginonecart-1a77b",
  storageBucket: "loginonecart-1a77b.firebasestorage.app",
  messagingSenderId: "877040988468",
  appId: "1:877040988468:web:7453453a04ed4460053561",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
