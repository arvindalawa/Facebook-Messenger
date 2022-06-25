import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyADr3-guLilZI5MVOaZ_vcdQIpt7pj2xmU",
    authDomain: "messenger-clone-e57f1.firebaseapp.com",
    projectId: "messenger-clone-e57f1",
    storageBucket: "messenger-clone-e57f1.appspot.com",
    messagingSenderId: "244718631301",
    appId: "1:244718631301:web:36e1cec101c32b9f1e6cec",
    measurementId: "G-0J5SX95SZS"
  });
  const db=firebaseApp.firestore();
  export default db;