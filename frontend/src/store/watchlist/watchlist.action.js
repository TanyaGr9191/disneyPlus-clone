import { watchlistService } from '../../services/watchlist.service.local'

export function loadWatchlist() {
    return async (dispatch) => {
        try{
            const watchlistMovies = await watchlistService.getWatchlist()
            console.log('watchlistMovies from DB:', watchlistMovies)
            dispatch({ type: 'SET_WATCHLIST', watchlistMovies })
        } catch(err){
            console.log('Cannot set watchlist')
        }
    }
}

export function removeFromWatchlist(movieId) {
    return async (dispatch) => {
        try {
            await watchlistService.removeFromWatchlist(movieId)
            dispatch({type: 'REMOVE_MOVIE', movieId})
        } catch (err) {
            console.log('Cannot remove from watchlist')
        }
    }
}

export function addToWatchlist(movie) {
    return async (dispatch) => {
        try {
            await watchlistService.addToWatchlist(movie)
            dispatch({type: 'ADD_MOVIE', movie})
        } catch (err) {
            console.log('Cannot add to watchlist')
        }
    }
}

