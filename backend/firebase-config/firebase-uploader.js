const firebase = require('firebase-admin')

const serviceAccount = require('./service_key.json')

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://disneyapp-frontend-default-rtdb.firebaseio.com"
})

const firestore = firebase.firestore()
const path = require("path")
const fs = require("fs")
const directoryPath = path.join(__dirname, "files")

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        console.log("Unable to scan directory: " + err)
    }

    files.forEach(function (file) {

        const lastDotIndex = file.lastIndexOf(".")
        const menu = require("./files/" + file)

        menu.forEach(function (obj) {

            firestore
                .collection(file.substring(0, lastDotIndex))
                .doc()
                .set(obj)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef)
                })
                .catch(function (error) {
                    console.log("Error adding document: ", error)
                })
        })

    })
})