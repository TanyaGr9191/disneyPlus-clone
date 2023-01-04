import { MoviePreview } from '../cmps/movie-preview'



export const TopResults = ({ getMovies, movies }) => {

    return (
        <>
            {movies.length > 1 &&
                <>
                    <h2>TOP RESULTS</h2>
                    <section className='movie-list'>
                        {getMovies(movies).map(movie => <MoviePreview key={movie._id} movie={movie} />)}
                    </section>
                </>}
        </>
    )

}


