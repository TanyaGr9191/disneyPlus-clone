import { useSelector } from 'react-redux'
import { MovieHero } from './movie-hero'
import { useState, useEffect } from 'react'


export const MovieSlider = () => {

    const { movies } = useSelector(state => state.movieModule)
    const sliderMovies = movies.slice(0, 5)
    const [index, setIndex] = useState(0)
    const [currSliderMovie, setCurrSliderMovie] = useState(sliderMovies[index])

    useEffect(() => {
        setCurrSliderMovie(sliderMovies[index])
    }, [index, sliderMovies])

    useEffect(() => {
        setTimeout(() => {
            setIndex(index === sliderMovies.length - 1 ? 0 : index + 1)
        }, 5000)
    }, [currSliderMovie, index, sliderMovies.length])

    if (!movies) return <div>Loading Slider...</div>
    return (
        <section className='movie-slider'>
            <div className='carousel'>
                <div className='slider'>
                    <div className="hero">
                        <MovieHero
                            currIndex={index}
                            movie={currSliderMovie}
                            sliderMovies={sliderMovies}/>
                    </div>
                </div>
            </div>
        </section>
    )

}