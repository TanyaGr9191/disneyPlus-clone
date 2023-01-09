const fs = require('fs')
var gWatchlist = require('../data/watchlist-movies.json')

module.exports = {
    query,
    getById,
    remove,
    add,
}

function query(filterBy = {}) {
    console.log('filterByy', filterBy)

    var watchlistMovies = gWatchlist

    var { title } = filterBy
    if (title) {
        const regex = new RegExp(title, 'i')
        watchlistMovies = gWatchlist.filter(watchlistMovie => regex.test(watchlistMovie.title))
    }

    console.log('watchlistMovies', watchlistMovies)
    return Promise.resolve(watchlistMovies)
}

function getById(watchlistMovieId) {
    const watchlistMovie = gWatchlist.find(watchlistMovie => watchlistMovie._id === watchlistMovieId)
    return Promise.resolve(watchlistMovie)
}

function remove(watchlistMovieId) {
    const idx = gWatchlist.findIndex(watchlistMovie => watchlistMovie._id === watchlistMovieId)
    gWatchlist.splice(idx, 1)

    return _saveMoviesToFile()
}

function add(watchlistMovie) {
    gWatchlist.push(watchlistMovie)
    return _saveMoviesToFile()
        .then(() => watchlistMovie)
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
        const data = JSON.stringify(gWatchlist, null, 2)
        fs.writeFile('data/watchlist-movies.json', data, (err) => {
            if (err) return reject('Cannot save to file')
            resolve()
        })
    })

}



