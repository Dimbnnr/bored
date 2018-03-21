import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5vwoBAz9fnGsJ68VL_OvKMo3DP-DsGfY",
    authDomain: "ironhack-6f63d.firebaseapp.com",
    databaseURL: "https://ironhack-6f63d.firebaseio.com",
    projectId: "ironhack-6f63d",
    storageBucket: "ironhack-6f63d.appspot.com",
    messagingSenderId: "852176463337"
  };
  firebase.initializeApp(config);

  export default firebase;