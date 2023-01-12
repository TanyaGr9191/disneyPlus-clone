const watchlistService = require('./watchlist.service')
const logger = require('../../services/logger.service')



// GET LIST
async function getWatchlist(req, res) {
    try {
        logger.debug('Getting Watchlist')
        const watchlist = await watchlistService.query()
        res.json(watchlist)
    } catch (err) {
        logger.error('Failed to get watchlist', err)
        res.status(500).send({ err: 'Failed to get watchlist' })
    }
}

// GET BY ID 
async function getWatchlistMovieById(req, res) {
    try {
        const watchlistMovieId = req.params.id
        // Get movie data from firebase colleciton
        const watchlistMovie = await watchlistService.getById(watchlistMovieId)
        res.json(watchlistMovie)
    } catch (err) {
        logger.error('Failed to get watchlist movie', err)
        res.status(500).send({ err: 'Failed to get watchlist movie' })
    }
}

// POST (add movie to watchlist)
async function addMovie(req, res) {
    try {
      const watchlistMovie = req.body
      const addedMovie = await watchlistService.add(watchlistMovie)
      res.json(addedMovie)
    } catch (err) {
      logger.error('Failed to add movie to watchlist', err)
      res.status(500).send({ err: 'Failed to add movie to watchlist' })
    }
  }


// DELETE (Remove movie from watchlist)
async function removeMovie(req, res) {
    try {
      const watchlistMovieId = req.params.id
      const removedId = await watchlistService.remove(watchlistMovieId)
      res.send(removedId)
    } catch (err) {
      logger.error('Failed to remove movie from watchlist', err)
      res.status(500).send({ err: 'Failed to remove movie from watchlist' })
    }
  }

module.exports = {
    getWatchlist,
    getWatchlistMovieById,
    addMovie,
    removeMovie
}
