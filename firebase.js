import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCWeB6svDpHxJqjlBiT-KGSqac-pJ_jnQk",
    authDomain: "milch-8ae53.firebaseapp.com",
    databaseURL: "https://milch-8ae53.firebaseio.com",
    projectId: "milch-8ae53",
    storageBucket: "milch-8ae53.appspot.com",
    messagingSenderId: "576342122997",
    appId: "1:576342122997:web:c8d2799423b9677c9c00bc",
    measurementId: "G-JXZHLPC4YE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();

export const dbcustomerRef = database.ref('userDetails');
     