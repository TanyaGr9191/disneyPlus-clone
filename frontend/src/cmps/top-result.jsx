import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export const TopResult = ({ movies }) => {

    return (
        <>
            {(movies.length === 1) &&
                <>
                    <h2>TOP RESULT</h2>
                    <section className='top-result'>
                        <div className='result'>
                            <img src={movies[0].cardImg} alt={movies[0].title} />
                            <div className='result-details'>
                                <p className='title'>{movies[0].title}</p>
                                <p>{movies[0].subTitle}</p>
                                <a href={movies[0].ytLink}>
                                    <button
                                        className={`play details-theme`} >
                                        <span>{<FontAwesomeIcon icon={faPlay} className="space" />}Watch Now</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                </>}
        </>
    )

}