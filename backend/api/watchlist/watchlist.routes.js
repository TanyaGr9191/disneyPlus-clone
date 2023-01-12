const express = require('express')
const router = express.Router()
const { getWatchlist, getWatchlistMovieById, addMovie, removeMovie } = require('./watchlist.controller')

module.exports = router
// middleware that is specific to this router

router.get('/', getWatchlist)
router.get('/:id', getWatchlistMovieById)
router.post('/', addMovie)
router.delete('/:id', removeMovie)
