const movieService = require('./movie.service')
const logger = require('../../services/logger.service')

// GET LIST
async function getMovies(req, res) {
  try {
    logger.debug('Getting Movies')
    var queryParams = req.query
    const movies = await movieService.query(queryParams)
    res.json(movies)
  } catch (err) {
    logger.error('Failed to get movies', err)
    res.status(500).send({ err: 'Failed to get movies' })
  }
}

// GET BY ID 
async function getMovieById(req, res) {
  try {
    const movieId = req.params.id
    // Get movie data from firebase colleciton
    const movieSnapshot = await movieService.getById(movieId)
    // Save data to our roundData variable
    let movie = []
    movie.push({
      _id: movieSnapshot.id,
      ...movieSnapshot.data()
    })
    res.json(...movie)
  } catch (err) {
    logger.error('Failed to get movie', err)
    res.status(500).send({ err: 'Failed to get movie' })
  }
}


module.exports = {
  getMovies,
  getMovieById
}