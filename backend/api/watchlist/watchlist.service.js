const { db } = require('../../services/db.service')
const logger = require('../../services/logger.service')

module.exports = {
    query,
    getById,
    remove,
    add,
}

async function query() {
    try {
        const watchlistSnapshot = await db.collection('watchlist').get()
        let watchlistMovies = []
        watchlistSnapshot.forEach(doc => {
            watchlistMovies.push({
                _id: doc.id,
                ...doc.data()
            })
        })
        
        return watchlistMovies
    } catch (err) {
        logger.error('cannot find watchlist', err)
        throw err
    }
}

async function getById(watchlistMovieId) {
    try {
        const watchlistRef = db.collection('watchlist')
        const watchSnaphot = await watchlistRef.doc(`${watchlistMovieId}`).get()
        if (!watchSnaphot.exists) {
            console.log('No matching movie in watchlist.')
            return
        }
        console.log('watchSnaphot', watchSnaphot)
        return watchSnaphot
    } catch (err) {
        logger.error(`while finding watchlist movie ${watchlistMovieId}`, err)
        throw err
    }
}

async function remove(watchlistMovieId) {
    try {
        // Make movie reference 
        const watchlistRef = db.collection('watchlist')
        // Get round from collectiton
        const watchlistSnapshot = await watchlistRef.doc(`${watchlistMovieId}`).get()
        // If round does not exist, return
        if(!watchlistSnapshot.exists){
            console.log('Cannot find movie in watchlist')
            return
        }
        // If current watchlist does not own movie
        if(watchlistSnapshot.data()._id !== watchlistMovieId){
            console.log('Watchlist does not own movie')
            return
        }
        await watchlistRef.doc(`${watchlistMovieId}`).delete()
        console.log(`Movie ${watchlistSnapshot.id} deleted successfully`) 
        return watchlistMovieId
    } catch (err) {
        logger.error(`cannot remove movie from watchlist ${watchlistMovieId}`, err)
        throw err
    }
}

async function add(watchlistMovie) {
    try {
        const watchlistRef = db.collection('watchlist')
        const watchlistSnapshot = await watchlistRef.doc(watchlistMovie._id).set({
            ...watchlistMovie
        })
        return watchlistSnapshot
    } catch (err) {
        logger.error('cannot insert movie to watchlist', err)
        throw err
    }
}




