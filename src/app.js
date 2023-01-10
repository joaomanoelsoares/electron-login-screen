import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAUkISlSPOBOKGUG4ZpJs4ndMQcnY5u6Mw",
    authDomain: "task-management-815f3.firebaseapp.com",
    databaseURL: "https://task-management-815f3-default-rtdb.firebaseio.com",
    projectId: "task-management-815f3",
    storageBucket: "task-management-815f3.appspot.com",
    messagingSenderId: "1055004788780",
    appId: "1:1055004788780:web:2609dafa754e2e4a4b6989",
    measurementId: "G-32M2NN8230"
  };
  
  firebase.initializeApp(firebaseConfig);