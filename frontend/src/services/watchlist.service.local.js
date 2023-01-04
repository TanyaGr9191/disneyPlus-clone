import { storageService } from './async-storage.service.js'
// import list from '../assets/watchlist.json'

export const watchlistService = {
    getWatchlist,
    removeFromWatchlist,
    addToWatchlist, 
    getFromWatchlistById
}

const gWatchlistMovies = []
const WATCHLIST_STORAGE_KEY = 'watchlist'

function getWatchlist() {
    return storageService.query(WATCHLIST_STORAGE_KEY).then(watchlistMovies => {
        if (!watchlistMovies) {
            watchlistMovies = storageService.postMany(WATCHLIST_STORAGE_KEY, gWatchlistMovies)
            // watchlistMovies = gWatchlistMovies
        }

        return watchlistMovies
    })
}

function removeFromWatchlist(watchlistMovieId) {
    console.log('watchlistMovieId', watchlistMovieId)
    return storageService.remove(WATCHLIST_STORAGE_KEY, watchlistMovieId)
}

function addToWatchlist(watchlistMovie){
    console.log('watchlistMoviewatchlistMovie', watchlistMovie)
    return storageService.post(WATCHLIST_STORAGE_KEY, watchlistMovie)
}


function getFromWatchlistById(movieId) {
    return storageService.get(WATCHLIST_STORAGE_KEY, movieId)
}
