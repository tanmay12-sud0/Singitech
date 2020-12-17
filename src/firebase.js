import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBqWRN1-zfkK3z0rWcfHWTg2_dQYUpAL78",
    authDomain: "sangitech-4e344.firebaseapp.com",
    projectId: "sangitech-4e344",
    storageBucket: "sangitech-4e344.appspot.com",
    messagingSenderId: "246823769645",
    appId: "1:246823769645:web:4199c917140eaf74ca4aa4",
    measurementId: "G-41ZKS0W73X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)


  export const  db = firebaseApp.firestore()
  export const auth = firebaseApp.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
