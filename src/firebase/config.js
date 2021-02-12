// Your web app's Firebase configuration
import app from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBbS4yrQlIqCqsf58MDIc6ZfLLghiLymfA",
    authDomain: "jobs4u-7b1e2.firebaseapp.com",
    projectId: "jobs4u-7b1e2",
    storageBucket: "jobs4u-7b1e2.appspot.com",
    messagingSenderId: "193271452524",
    appId: "1:193271452524:web:07d44b0284b69ad8079949"
  };
  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  export {firebase, firestore, app};