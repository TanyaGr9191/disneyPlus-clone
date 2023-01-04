import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MovieFilter } from "../cmps/movie-filter"
import { SideNav } from "../cmps/side-nav"
import { MovieRubric } from "../cmps/movie-rubric"
import { loadMovies, setFilterBy } from '../store/movie/movie.action'

export const Search = () => {

    const search = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMovies())
    }, [])

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadMovies())
    }

    if(!search) return <div>Loading</div>
    return (
        <section className='search'>
            <SideNav />
            <div className="content">
                <MovieFilter onChangeFilter={onChangeFilter} />
                <MovieRubric search={search}/>
            </div>
        </section>
    )

}