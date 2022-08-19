import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBgU_X3YdQnGu1khOZ2LSU5PgUvMRAR9Dc",
    authDomain: "login-context-d95d0.firebaseapp.com",
    projectId: "login-context-d95d0",
    storageBucket: "login-context-d95d0.appspot.com",
    messagingSenderId: "786916609198",
    appId: "1:786916609198:web:797c4c5a66a14ee455b13f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;