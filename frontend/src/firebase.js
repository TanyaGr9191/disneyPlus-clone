// Import the functions you need from the SDKs you need
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNTGs77D7Q8wrnOGUw16AhhB745xbTIIY",
  authDomain: "disneyapp-frontend.firebaseapp.com",
  projectId: "disneyapp-frontend",
  storageBucket: "disneyapp-frontend.appspot.com",
  messagingSenderId: "482447572217",
  appId: "1:482447572217:web:9b0c42c3321d253188b628"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export {auth, provider, storage}
export default db