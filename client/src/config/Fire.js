import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUgT8dgzr8PBLHQ2WuZm_Apb91kV_OVBE",
    authDomain: "accesspro.firebaseapp.com",
    databaseURL: "https://accesspro.firebaseio.com",
    projectId: "accesspro",
    storageBucket: "accesspro.appspot.com",
    messagingSenderId: "205317441584",
    appId: "1:205317441584:web:e39094918110bb69ce05f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;