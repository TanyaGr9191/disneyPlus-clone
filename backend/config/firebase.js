// Import the functions you need from the SDKs you need
const firebase = reqire('firebase')
import movies from './data/movies.json'
import watchlist from './data/watchlist-movies.json'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()
// const storage = firebase.storage()


function addJSONtoFirestore(movies, watchlist) {

  try {
    db.collection('movies').doc().set(movies)
    console.log('MOVIES data added successfully')
  } catch (error) {
    console.log('Error adding MOVIES data: ', error)
  }

  try {
    db.collection('watchlist').doc().set(watchlist)
    console.log('WATCHLIST data added successfully')
  } catch (error) {
    console.log('Error adding WATCHLIST data: ', error)
  }
  
  
}

// export {auth, provider, storage}
// export { storage }
export default db