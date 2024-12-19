import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBizDyiXwv2vmcJrDjoB8B35X5gtxkN_ec",
  authDomain: "taskapp-313fd.firebaseapp.com",
  projectId: "taskapp-313fd",
  storageBucket: "taskapp-313fd.firebasestorage.app",
  messagingSenderId: "191817050846",
  appId: "1:191817050846:web:c36b90778799b12aaff04f"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}