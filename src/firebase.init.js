
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlUMNy4pugK0a-J7iUKcBeNLTgrpUIw7U",
  authDomain: "truliox-todo-app.firebaseapp.com",
  projectId: "truliox-todo-app",
  storageBucket: "truliox-todo-app.appspot.com",
  messagingSenderId: "962638394730",
  appId: "1:962638394730:web:583690c9c729779c812113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;