import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC68wL6SD-aU9KOMlWJlHIYl0BzsmVd8e0",
    authDomain: "react-crud-app-33bca.firebaseapp.com",
    projectId: "react-crud-app-33bca",
    storageBucket: "react-crud-app-33bca.appspot.com",
    messagingSenderId: "45501461948",
    appId: "1:45501461948:web:47a518b65af616f3e9a7b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };