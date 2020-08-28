import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDCODlCFh9xzBVkgHHwnyXMAqPDHRftTMg",
    authDomain: "clone-45f1e.firebaseapp.com",
    databaseURL: "https://clone-45f1e.firebaseio.com",
    projectId: "clone-45f1e",
    storageBucket: "clone-45f1e.appspot.com",
    messagingSenderId: "1099497405539",
    appId: "1:1099497405539:web:be20d472d5e8ed1ff88c56",
    measurementId: "G-7DLQ3PB5ZF"
  });

  const auth = firebase.auth();

  export {auth};