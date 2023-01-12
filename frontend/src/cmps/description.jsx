

export const Description = ({ movie }) => {

    const getDescription = (movie) => {

        const { subTitle } = movie
        return subTitle.split(' • ')
    }

    if(!movie) return <div>Loading description...</div>
    return (
        <div className="movie-description">
            <div className="description">
                <img className="img-title" src={movie?.titleImg} alt={`${movie?.title || 'movie-title'}`} />
                <span className="font-weight">{getDescription(movie)
                    .splice(0, 2)
                    .map((item, idx, arr) =>
                        <span key={item}>
                            {idx === arr.length - 1 ? `${item}` : `${item} • `}
                        </span>)}
                </span>
                <span>{movie?.description}</span>
                <span className="font-weight">{getDescription(movie)[getDescription(movie).length - 1]
                    .split(', ')
                    .map((item, idx, arr) =>
                        <span key={item}>{idx === arr.length - 1 ? `${item}` : `${item} | `}</span>)}
                </span>
            </div>
        </div>
    )

}