import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCheck } from '@fortawesome/free-solid-svg-icons'
import { loadWatchlist, removeFromWatchlist, addToWatchlist } from '../store/watchlist/watchlist.action'

export const ActionList = ({ sliderMovies, movie }) => {

    const { watchlistMovies } = useSelector(state => state.watchlistModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadWatchlist())
    }, [(watchlistMovies && watchlistMovies.length), dispatch])

    function checkWatchlist(watchlistMovies, movie) {
        if (!watchlistMovies) return
        let isOnWatchlist = false
        watchlistMovies?.forEach(watchlistMovie => {
            if (!watchlistMovie) return
            if (watchlistMovie._id === movie._id) isOnWatchlist = !isOnWatchlist
        })
        return isOnWatchlist
    }

    const onRemoveMovie = (movieId) => {
        dispatch(removeFromWatchlist(movieId))
        dispatch(loadWatchlist())
    }

    const onAddMovie = (movie) => {
        dispatch(addToWatchlist(movie))
        dispatch(loadWatchlist())
    }

    return (
        <div className='action-list'>
            <a href={movie.ytLink}>
                <button
                    className={`play ${sliderMovies ? 'slider-theme' : 'details-theme'}`} >
                    <span>{<FontAwesomeIcon icon={faPlay} className="space" />}Watch Now</span>
                </button>
            </a>
            <button
                onClick={() => checkWatchlist(watchlistMovies, movie) ? onRemoveMovie(movie._id) : onAddMovie(movie)}
                className={`add slider-theme`}>
                <span>{checkWatchlist(watchlistMovies, movie) ? <FontAwesomeIcon icon={faCheck} /> : '+'}</span>
            </button>

        </div>
    )

}