import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
import allMovies from '../assets/disney-movies.json'

export const movieService = {
    query,
    getById,
    // remove,
    // save
}

const STORAGE_KEY = 'movies'

const gMovies = allMovies

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(movies => {
        if (!movies || !movies.length) {
            storageService.postMany(STORAGE_KEY, gMovies)
            movies = gMovies
        }
        if (filterBy) {
            const { title } = filterBy
            if (title) {
                const regex = new RegExp(title, 'i')
                movies = movies.filter(movie => regex.test(movie.title))
            }
        }
        // if (filterBy) {
        //     const { title, maxRate, minRate, year } = filterBy
        //     maxRate = maxRate || Infinity
        //     minRate = minRate || 0
        //     movies = movies.filter(movie =>
        //         movie.title.toLowerCase().includes(title.toLowerCase()) &&
        //         movie.year === year &&
        //         movie.rate <= maxRate &&
        //         movie.rate >= minRate)
        // }
        return movies
    })
}

function getById(movieId) {
    return storageService.get(STORAGE_KEY, movieId)
}

