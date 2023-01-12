const express = require('express')
const { getMovies, getMovieById } = require('./movie.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getMovies)
router.get('/:id', getMovieById)

module.exports = router