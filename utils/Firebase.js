import * as firebase from 'firebase'
/**
 * Firebase Initial Configuration
 */
var firebaseConfig = {
    apiKey: "AIzaSyAhCt7iyYGrf_rZe-ALRcGs3BlJRcxfS_8",
    authDomain: "multiauth-64a11.firebaseapp.com",
    databaseURL: "https://multiauth-64a11.firebaseio.com",
    projectId: "multiauth-64a11",
    storageBucket: "multiauth-64a11.appspot.com",
    messagingSenderId: "1098886994577",
    appId: "1:1098886994577:web:e06459dc0586c72396fd30",
    measurementId: "G-HLWGXHMGV0"
  };
  
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase