import { PlayContainer } from "./play-container"

export const MovieHero = ({ movie, sliderMovies, currIndex }) => {

    if (!movie) return <div>Loading Movie...</div>
    return (
        <section className="movie-hero-container">
            <div className="movie-hero ">
                <img className="img-hero"
                    src={movie?.backgroundImg}
                    alt={`${movie?.title || 'movie-title'}`} />
                <PlayContainer movie={movie} sliderMovies={sliderMovies} currIndex={currIndex} />
            </div>
        </section>
    )
}