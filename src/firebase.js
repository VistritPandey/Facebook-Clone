import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB27AtBtakvhiTqbyPeNznnjtE2K3Ar-8E",
    authDomain: "vistrit-facebook-clone.firebaseapp.com",
    databaseURL: "https://vistrit-facebook-clone.firebaseio.com",
    projectId: "vistrit-facebook-clone",
    storageBucket: "vistrit-facebook-clone.appspot.com",
    messagingSenderId: "957743779944",
    appId: "1:957743779944:web:089637a01c02caea5dabdd",
    measurementId: "G-VT9S817GKC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;

  {/*
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyDknUEvUXhOdZuIdUGaAXJpvmPnUSl2qrY",
  authDomain: "vistrit-facebook.firebaseapp.com",
  databaseURL: "https://vistrit-facebook.firebaseio.com",
  projectId: "vistrit-facebook",
  storageBucket: "vistrit-facebook.appspot.com",
  messagingSenderId: "116882626438",
  appId: "1:116882626438:web:116ffa896e30ab8391fe07",
  measurementId: "G-RCLB6DGHVQ"
};*/}