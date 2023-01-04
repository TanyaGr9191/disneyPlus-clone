import { useSelector } from 'react-redux'
import { TopResults } from '../cmps/top-results'
import { TopResult } from '../cmps/top-result'
import { MoreMovies } from '../cmps/more-movies'
import { MoviePreview } from '../cmps/movie-preview'
import allMovies from '../assets/disney-movies.json'

export const MovieCategory = ({ rubrics, search }) => {

    const { movies, movie, filterBy } = useSelector(state => state.movieModule)


    const getMovies = (movies) => {
        if (!movies) return
        if (filterBy) {
            return movies
        }

        let moviesByCategory = []

        rubrics.forEach(rubric => {
            const { value } = rubric
            moviesByCategory.push(...movies.filter(movie => {
                if (!moviesByCategory.includes(movie) && movie.subTitle.toLowerCase().includes(value)) {
                    return movie
                }
            }))
        })

        return moviesByCategory
    }


    if (!movies) return <div>Loading...</div>
    return (
        <section className='movie-list-container'>
            {search ? <section className='rubric'>
                <TopResults
                    getMovies={getMovies}
                    movies={movies} />
                <TopResult
                    movies={movies} />
                <MoreMovies
                    allMovies={allMovies}
                    movies={movies} />
            </section> :
                <section className='movie-rubric'>
                    <>
                        <h2>More like this</h2>
                        <section className='movie-list'>
                            {getMovies(movies).map(movie => <MoviePreview key={movie._id} movie={movie} />)}
                        </section>
                    </>
                    <div className='trailer'>
                        <h2>Trailers & More</h2>
                        <a
                            href={movie.ytLink}>
                            <img src={movie.cardImg} alt={`${movie.cardImg}`} />
                        </a>
                    </div>
                </section>}
        </section >
    )

}