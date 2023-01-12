"use strict";

// Import the functions you need from the SDKs you need
var firebase = require('firebase-admin');

var serviceAccount = require('./service_key.json'); // Initialize Firebase


firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://disneyapp-frontend-default-rtdb.firebaseio.com"
});
var db = firebase.firestore();
module.exports = {
  db: db
};