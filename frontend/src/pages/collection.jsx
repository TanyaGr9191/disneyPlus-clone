import { SideNav } from "../cmps/side-nav"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieRubric } from "../cmps/movie-rubric"
import { useDispatch, useSelector } from 'react-redux'
import { loadMovies } from '../store/movie/movie.action'


export const Collection = () => {

    const { movies } = useSelector(state => state.movieModule)
    const { collection } = useParams()
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(loadMovies())
    }, [dispatch])

    const getCollection = (collection) => {
        return movies?.filter(movie=>{
            if(movie?.createdBy?.includes(collection)) {
                return movie
            }
        })
    }

    if (!movies) return <div>Loading...</div>
    return (
        <section className='movie-collection-container'>
            <SideNav />
            <div className="collection-bg">
                <img src={require(`../assets/img/${collection}-bg.jpg`)} alt={`${collection}-bg`} />
            </div>
            <div className="collection">
                <div className="collection-hero">
                    <img src={require(`../assets/img/${(collection === 'pixar') ? 'empty' : collection}.png`)} alt={`${collection}`} />
                </div>
                <div className="collection-list">
                    <MovieRubric collection={getCollection(collection)}/>
                </div>
            </div>
        </section>
    )
}