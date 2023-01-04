
const INITIAL_STATE = {
    watchlistMovies: null
}

export function watchlistReducer(state = INITIAL_STATE, action) {
    let newState = state
    let watchlistMovies
    switch (action.type) {
        case 'SET_WATCHLIST':
            newState = { ...state, watchlistMovies: action.watchlistMovies }
            break
        case 'REMOVE_MOVIE':
            watchlistMovies = state.watchlistMovies.filter(watchlistMovie => watchlistMovie._id !== action.movieId)
            newState = { ...state, watchlistMovies: action.watchlistMovies }
            break
        case 'ADD_MOVIE':
            watchlistMovies = [...state.watchlistMovies, action.watchlistMovie]
            newState = { ...state, watchlistMovies }
            break
        default:
            newState = state
            break
    }

    // For debug:
    // window.movieState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState
}