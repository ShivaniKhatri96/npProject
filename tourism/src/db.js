import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCD6qrdPVDp7h9pNBqDaV0h28tKa0Ovok4",
    authDomain: "np-project-33535.firebaseapp.com",
    databaseURL: "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "np-project-33535",
    storageBucket: "np-project-33535.appspot.com",
    messagingSenderId: "916386080265",
    appId: "1:916386080265:web:b837290d8b2c0038d67ad8",
    measurementId: "G-XP98K1KLN6"
  };
  
  // Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db;