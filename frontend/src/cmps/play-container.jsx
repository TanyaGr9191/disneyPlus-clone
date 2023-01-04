import { CollectionCards } from './collection-cards'
import { Description } from './description'
import { SliderCards } from './slider-cards'
import { ActionList } from './action-list'

export const PlayContainer = ({ movie, sliderMovies, currIndex }) => {

    return (
        <div className="play-container">
                <Description movie={movie} />
                <div className="action-container">
                    <ActionList sliderMovies={sliderMovies} movie={movie} />
                    {sliderMovies && <SliderCards sliderMovies={sliderMovies} currIndex={currIndex} />}
                </div>
                {sliderMovies && <CollectionCards />}
        </div>
    )

}