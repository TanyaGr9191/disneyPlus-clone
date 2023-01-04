import { useSelector } from 'react-redux'
import { MovieList } from '../cmps/movie-list'
import { utilService } from '../services/util.service'
import { MovieCategory } from './movie-category'

export const MovieSearch = ({ rubricList, search }) => {

    const { movies, filterBy } = useSelector(state => state.movieModule)


    const showByRubric = (filterBy) => {
        let rubricCopy = []
        rubricCopy = rubricList.filter(rubric => {
            const { value } = rubric
            if ((!filterBy || filterBy.title === '') && value === 'trending') {
                return rubric
            } 
        })

        // console.log('rubricCopy', rubricCopy)
        return rubricCopy
    }


    if (!rubricList) return
    return (
        <section className='movie-search'>
            {(!filterBy || filterBy.title === '') ?
                showByRubric(filterBy).map(rubric => <MovieList
                    key={utilService.makeId()}
                    rubric={rubric}
                    movies={movies} />) :
                <>
                    <MovieCategory
                        rubrics={rubricList}
                        search={search} />
                </>}
        </section>
    )

}