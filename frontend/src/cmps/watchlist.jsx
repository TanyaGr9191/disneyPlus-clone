import { MovieList } from '../cmps/movie-list'


export const Watchlist = ({watchlistMovies}) => {

    if (!watchlistMovies) return <div>Loading Watchlist...</div>
    return (
        <section className='watchlist'>
            <MovieList watchlistMovies={watchlistMovies} />
        </section>
    )

}