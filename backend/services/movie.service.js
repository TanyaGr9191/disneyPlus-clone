const fs = require('fs')
var gMovies = require('../data/movies.json')

module.exports = {
    query,
    getById,
    remove,
    save,
}

function query(filterBy = {}) {
    console.log('filterByy', filterBy)

    var movies = gMovies

    var { title } = filterBy
    if (title) {
        const regex = new RegExp(title, 'i')
        movies = gMovies.filter(movie => regex.test(movie.title))
    }

    console.log('movies', movies)
    return Promise.resolve(movies)
}

function getById(movieId) {
    const movie = gMovies.find(movie => movie._id === movieId)
    return Promise.resolve(movie)
}

function remove(movieId) {
    const idx = gMovies.findIndex(movie => movie._id === movieId)
    gMovies.splice(idx, 1)

    return _saveMoviesToFile()
}

function save(movie) {
    if (movie._id) {
        const movieToUpdate = gMovies.find(currMovie => currMovie._id === movie._id)

        movieToUpdate.title = movie.title
    } else {
        movie._id = _makeId()
        movie.createdAt = Date.now()
        gMovies.push(movie)
    }
    return _saveMoviesToFile()
        .then(() => movie)
}

function _makeId(length = 5) {
    var txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function _saveMoviesToFile() {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(gMovies, null, 2)
        fs.writeFile('data/movies.json', data, (err) => {
            if (err) return reject('Cannot save to file')
            resolve()
        })
    })

}



