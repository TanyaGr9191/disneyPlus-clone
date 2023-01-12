const { db } = require('../../services/db.service')
const logger = require('../../services/logger.service')

module.exports = {
    query,
    getById,
}

async function query(filterBy = {}) {
    try {
        const moviesRef = db.collection('movies')
        const snapshot = await moviesRef.get()
        if (snapshot.empty) {
            console.log('No matching movies.');
            return;
        }

        let allMovies = []
        snapshot.forEach(doc => {
            allMovies.push({
                _id: doc.id,
                ...doc.data()
            })
        })

        let filteredMovies = allMovies;
        const { title } = filterBy
        if (title && title.trim()) {
            filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
        }

        return filteredMovies
    } catch (err) {
        logger.error('cannot find movies', err)
        throw err
    }
}

async function getById(movieId) {
    try {
        const movieSnapshot = await db.collection('movies').doc(`${movieId}`).get()
        if (!movieSnapshot.exists) {
            console.log('No matching movie.')
            return
        }
        return movieSnapshot
    } catch (err) {
        logger.error(`while finding movie ${movieId}`, err)
        throw err
    }
}