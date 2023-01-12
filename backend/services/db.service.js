// Import the functions you need from the SDKs you need
const firebase = require('firebase-admin')
const serviceAccount = require('../firebase-config/service_key.json')

// Initialize Firebase
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://disneyapp-frontend-default-rtdb.firebaseio.com"
})

const db = firebase.firestore()

module.exports = {
    db
}