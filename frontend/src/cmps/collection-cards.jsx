import { Link } from 'react-router-dom'
import React from 'react';
import { utilService } from '../services/util.service'

export const CollectionCards = () => {

    const brandNames = ['disney', 'pixar', 'marvel', 'star-wars', 'national-geographic']


    return (
        <section className='brand-list'>
            {brandNames.map(brandName =>
                <React.Fragment key={utilService.makeId()}>
                    <span className='brand'
                        key={utilService.makeId()}>
                        <Link to={`/${brandName}`}>
                            <img src={require(`../assets/img/${brandName}.png`)} alt={`${brandName}`} />
                        </Link>
                        <video
                            key={utilService.makeId()}
                            src={require(`../assets/img/${brandName}-video.mp4`)}
                            type='video/mp4'
                            autoPlay loop muted>
                        </video>
                    </span>

                </React.Fragment>)}
        </section>
    )

}