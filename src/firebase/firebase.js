import * as firebase from 'firebase';

// Initialize Firebase
 var config = {
  apiKey: "AIzaSyBsnBB0og2bOT5WIrfQba6kUEiXjvKFP_0",
  authDomain: "attendance-tracker-4682e.firebaseapp.com",
  databaseURL: "https://attendance-tracker-4682e.firebaseio.com",
  projectId: "attendance-tracker-4682e",
  storageBucket: "attendance-tracker-4682e.appspot.com",
  messagingSenderId: "219491833583"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};