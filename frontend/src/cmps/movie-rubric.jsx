import { useSelector } from 'react-redux'
import { MovieList } from '../cmps/movie-list'
import { MovieSearch } from '../cmps/movie-search'
import { MovieCategory } from '../cmps/movie-category'
import { utilService } from '../services/util.service'
import { useParams } from 'react-router-dom'


export const MovieRubric = ({ collection, search }) => {

    const { movies, movie } = useSelector(state => state.movieModule)
    const { movieId } = useParams()

    const rubricList = [
        { title: 'Movies Recommended For You', value: 'recommend' },
        { title: 'New to DisneyApp', value: 'new' },
        { title: 'Popular Searches', value: 'trending' },
        { title: 'Only on DisneyApp', value: 'original' },
        { title: 'Action and Adventure', value: 'action-adventure' },
        { title: 'Family Movies', value: 'family' },
        { title: 'Animated Movies', value: 'animation' },
        { title: 'Comedy Movies', value: 'comedy' },
        { title: 'Documentaries and Reality', value: 'documentary' },
        { title: 'Musicals', value: 'musical' }]

    function getRubric(rubricList, movie) {
        let rubricListCopy = []
        if (movieId) {
            rubricListCopy = rubricList.filter(rubric => {
                const { value } = rubric
                if (movie.subTitle.toLowerCase().includes(value)) {
                    return rubric
                }
            })
        } else {
            rubricListCopy = rubricList
        }

        return rubricListCopy
    }

    return (
        <div className="movie-rubric">
            {movieId ?
                <section className="rubric">
                    <MovieCategory
                        movies={movies}
                        rubrics={getRubric(rubricList, movie)}
                        movie={movie} />
                </section> :
                <section className="rubric">
                    {search ?
                        <MovieSearch
                            rubricList={rubricList}
                            search={search} /> :
                        <>{getRubric(rubricList).map(rubric =>
                            <MovieList
                                key={utilService.makeId()}
                                rubric={rubric}
                                movies={collection ? collection : movies} />)}
                        </>}
                </section>}
        </div>
    )
}