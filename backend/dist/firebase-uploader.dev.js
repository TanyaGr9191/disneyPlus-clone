"use strict";

var firebase = require('firebase-admin');

var serviceAccount = require('./service_key.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://disneyapp-frontend-default-rtdb.firebaseio.com"
});
var firestore = firebase.firestore();

var path = require("path");

var fs = require("fs");

var directoryPath = path.join(__dirname, "files");
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    var lastDotIndex = file.lastIndexOf(".");

    var menu = require("./files/" + file);

    menu.forEach(function (obj) {
      firestore.collection(file.substring(0, lastDotIndex)).doc().set(obj).then(function (docRef) {
        console.log("Document written with ID: ", docRef);
      })["catch"](function (error) {
        console.log("Error adding document: ", error);
      });
    });
  });
});