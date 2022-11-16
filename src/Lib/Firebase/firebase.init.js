import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationFirebase = () => {
  return initializeApp(firebaseConfig);
};

export default initializationFirebase;
