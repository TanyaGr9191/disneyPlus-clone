import {  useSelector } from 'react-redux'
import { MoviePreview } from '../cmps/movie-preview'
import { utilService } from '../services/util.service'

export const MovieList = ({ rubric }) => {

    const { movies } = useSelector(state => state.movieModule)
    const { watchlistMovies } = useSelector(state => state.watchlistModule)

    const getFilteredMovies = (movies) => {
        if (!movies) return
        const { value } = rubric
        return movies.filter(movie => {
            if (value === movie.type || movie.subTitle.toLowerCase().includes(value)) {
                return movie
            }

        })
    }

    if (!movies) return <div>Loading...</div>
    return (
        <section className="movie-list-container">
            < >
                {(watchlistMovies || getFilteredMovies(movies).length > 0) && 
                <h2>{rubric ? rubric.title : 'Watchlist'}</h2>}
            </>
            <div className="movie-list">
                {rubric &&
                    getFilteredMovies(movies).map(movie =>
                        <MoviePreview
                            key={utilService.makeId()}
                            movie={movie} />)}
                {watchlistMovies &&
                    watchlistMovies.map(watchlistMovie =>
                        <MoviePreview
                            key={utilService.makeId()}
                            movie={watchlistMovie} />)}
            </div>
        </section>
    )
}