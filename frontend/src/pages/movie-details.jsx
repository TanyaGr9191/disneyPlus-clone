import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SideNav } from '../cmps/side-nav'
import { MovieHero } from '../cmps/movie-hero'
import { MovieRubric } from '../cmps/movie-rubric'
import { loadMovie, loadMovies } from '../store/movie/movie.action'
import { loadWatchlist } from '../store/watchlist/watchlist.action'


export const MovieDetails = () => {

    const { movies, movie } = useSelector(state => state.movieModule)
    const { movieId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMovie(movieId))
        dispatch(loadMovies())
        dispatch(loadWatchlist())
    }, [movieId, dispatch])

    if (!movie) return <div>Loading...</div>
    return (
        <section className='movie-details'>
            <SideNav />
            <div className="content">
                <div className="hero"><MovieHero movie={movie} /></div>
                <div className="list"><MovieRubric movie={movie} movies={movies} /></div>
            </div>
        </section>
    )
}