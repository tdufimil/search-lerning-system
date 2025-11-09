import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyB2AV2v9MpQy6c4q6UzXuym6vgIxA-98",
  authDomain: "algorithm-learning-system.firebaseapp.com",
  projectId: "algorithm-learning-system",
  storageBucket: "algorithm-learning-system.firebasestorage.app",
  messagingSenderId: "599533041301",
  appId: "1:599533041301:web:5c44d48e600954020c4d9c"
});

const db = firebaseApp.firestore();

export {db};