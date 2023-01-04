import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Watchlist } from '../cmps/watchlist'
import { MovieSlider } from '../cmps/movie-slider'
import { MovieRubric } from "../cmps/movie-rubric"
import { SideNav } from "../cmps/side-nav"
import { loadMovies } from '../store/movie/movie.action'
import { loadWatchlist } from '../store/watchlist/watchlist.action'


export const MovieApp = () => {

    const { movies } = useSelector(state => state.movieModule)
    const { watchlistMovies } = useSelector(state => state.watchlistModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMovies())
        dispatch(loadWatchlist())
    }, [dispatch])


    if (!movies) return <div>Loading...</div>
    return (
        <section className="movie-app">
            <SideNav />
            <div className="content">
                <div className="slider">
                    <MovieSlider />
                </div>
                {(watchlistMovies && watchlistMovies.length > 0) &&
                    <Watchlist watchlistMovies={watchlistMovies} />}
                <MovieRubric movies={movies} />
            </div>
        </section>
    )
}