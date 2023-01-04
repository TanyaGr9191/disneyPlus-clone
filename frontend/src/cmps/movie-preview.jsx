import { Link } from 'react-router-dom'

export const MoviePreview = ({ movie }) => {

    if(!movie) return <div>Loading preview...</div>
    return (
        <section className="movie-preview">
            <Link to={`/movie/${movie._id}`}>
                <img src={movie.movieImg} alt="movie-poster" />
            </Link>
        </section>
    )
}