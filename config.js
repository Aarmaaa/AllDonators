import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDKqyNJjxofoeDwobbrgjpY_NFpf8worjk",
  authDomain: "alldonators.firebaseapp.com",
  projectId: "alldonators",
  storageBucket: "alldonators.appspot.com",
  messagingSenderId: "1020137509835",
  appId: "1:1020137509835:web:43ec13978cb8c7e137dc4e"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();