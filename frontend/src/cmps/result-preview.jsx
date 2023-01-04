import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export const ResultPreview = ({ movie }) => {

    if (!movie) return <div>Loading preview...</div>
    return (
        <section className="result-preview" >
            <Link to={`/movie/${movie._id}`} >
                    <img src={movie.cardImg} alt="movie-card" />
                <div className='preview-details'>
                    <p className='title'>{movie.title}</p>
                    <p>{movie.subTitle}</p>
                    <a href={movie.ytLink}>
                        <button
                            className={`play details-theme`} >
                            <p>{<FontAwesomeIcon icon={faPlay} className="space" />}Watch Now</p>
                        </button>
                    </a>
                </div>
            </Link>
        </section>
    )
}