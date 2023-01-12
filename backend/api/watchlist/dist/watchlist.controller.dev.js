"use strict";

var watchlistService = require('./watchlist.service');

var logger = require('../../services/logger.service'); // GET LIST


function getWatchlist(req, res) {
  var watchlist;
  return regeneratorRuntime.async(function getWatchlist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          logger.debug('Getting Watchlist');
          _context.next = 4;
          return regeneratorRuntime.awrap(watchlistService.query());

        case 4:
          watchlist = _context.sent;
          res.json(watchlist);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          logger.error('Failed to get watchlist', _context.t0);
          res.status(500).send({
            err: 'Failed to get watchlist'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // GET BY ID 


function getWatchlistMovieById(req, res) {
  var watchlistMovieId, watchlistMovie;
  return regeneratorRuntime.async(function getWatchlistMovieById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          watchlistMovieId = req.params.id; // Get movie data from firebase colleciton

          _context2.next = 4;
          return regeneratorRuntime.awrap(watchlistService.getById(watchlistMovieId));

        case 4:
          watchlistMovie = _context2.sent;
          res.json(watchlistMovie);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          logger.error('Failed to get watchlist movie', _context2.t0);
          res.status(500).send({
            err: 'Failed to get watchlist movie'
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // POST (add movie to watchlist)


function addMovie(req, res) {
  var watchlistMovie, addedMovie;
  return regeneratorRuntime.async(function addMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          watchlistMovie = req.body;
          _context3.next = 4;
          return regeneratorRuntime.awrap(watchlistService.add(watchlistMovie));

        case 4:
          addedMovie = _context3.sent;
          res.json(addedMovie);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          logger.error('Failed to add movie to watchlist', _context3.t0);
          res.status(500).send({
            err: 'Failed to add movie to watchlist'
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // DELETE (Remove movie from watchlist)


function removeMovie(req, res) {
  var watchlistMovieId, removedId;
  return regeneratorRuntime.async(function removeMovie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          watchlistMovieId = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(watchlistService.remove(watchlistMovieId));

        case 4:
          removedId = _context4.sent;
          res.send(removedId);
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          logger.error('Failed to remove movie from watchlist', _context4.t0);
          res.status(500).send({
            err: 'Failed to remove movie from watchlist'
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

module.exports = {
  getWatchlist: getWatchlist,
  getWatchlistMovieById: getWatchlistMovieById,
  addMovie: addMovie,
  removeMovie: removeMovie
};