import { utilService } from '../services/util.service'
import { Link } from 'react-router-dom'


export const SliderCards = ({ sliderMovies, currIndex }) => {

    return (
        <div className='shift-list'>
            {sliderMovies.map((movie, idx) =>
                <span
                    key={utilService.makeId()}
                    className={`hero-card ${idx === currIndex && 'border'}`}>
                    <Link to={`/movie/${movie._id}`}>
                        <img
                            src={movie.cardImg}
                            alt={movie.title} />
                    </Link>
                </span>
            )}
        </div>
    )

}