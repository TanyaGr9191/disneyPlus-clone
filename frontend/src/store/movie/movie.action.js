import { movieService } from '../../services/movie.service'
// import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service'

export function loadMovies() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().movieModule
            const movies = await movieService.query(filterBy)
            // console.log('Movies from DB:', movies)
            dispatch({ type: 'SET_MOVIES', movies })
            // showSuccessMsg('Movies set')
        } catch (err) {
            console.log('Cannot set movies')
            // showErrorMsg('Cannot load movies')
        }
    }
}

export function loadMovie(movieId) {
    return async (dispatch) => {
        try {
            const movie = await movieService.getById(movieId)
            // console.log('Movie from DB:', movie)
            dispatch({ type: 'SET_MOVIE', movie })
            // showSuccessMsg('Movies set')
        } catch (err) {
            console.log('Cannot set movie')
            // showErrorMsg('Cannot load movie')
        }
    }
}


export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}