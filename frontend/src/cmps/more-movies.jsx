import { MoviePreview } from '../cmps/movie-preview'
// import { ResultPreview } from '../cmps/result-preview'


export const MoreMovies = ({ allMovies, movies }) => {

    console.log('movies', movies)
    console.log('allMovies', allMovies)

    const getMoreResults = (movies, allMovies) => {
        let moreResults = []

        if (movies.length !== allMovies.length) {
            moreResults = allMovies.filter(movie => {
                if(movies.length){
                    if (movie.type === movies[0].type && movie._id !== movies[0]._id){
                        return movie
                    }
                } else return movie

            })
        } else {
            moreResults = allMovies
        }


        return moreResults
    }

    if (!movies) return
    return (
        <>
            <h2>MORE RESULTS</h2>
            <section className='more-results'>
                {getMoreResults(movies, allMovies).map(movie => <MoviePreview key={movie._id} movie={movie} />)}
            </section>
        </>
    )

}




