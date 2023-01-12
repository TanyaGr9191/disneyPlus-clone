"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var movieService = require('./movie.service');

var logger = require('../../services/logger.service'); // GET LIST


function getMovies(req, res) {
  var queryParams, movies;
  return regeneratorRuntime.async(function getMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          logger.debug('Getting Movies');
          queryParams = req.query;
          _context.next = 5;
          return regeneratorRuntime.awrap(movieService.query(queryParams));

        case 5:
          movies = _context.sent;
          res.json(movies);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          logger.error('Failed to get movies', _context.t0);
          res.status(500).send({
            err: 'Failed to get movies'
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // GET BY ID 


function getMovieById(req, res) {
  var movieId, movieSnapshot, movie;
  return regeneratorRuntime.async(function getMovieById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          movieId = req.params.id; // Get movie data from firebase colleciton

          _context2.next = 4;
          return regeneratorRuntime.awrap(movieService.getById(movieId));

        case 4:
          movieSnapshot = _context2.sent;
          // Save data to our roundData variable
          movie = [];
          movie.push(_objectSpread({
            _id: movieSnapshot.id
          }, movieSnapshot.data()));
          res.json.apply(res, movie);
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          logger.error('Failed to get movie', _context2.t0);
          res.status(500).send({
            err: 'Failed to get movie'
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

module.exports = {
  getMovies: getMovies,
  getMovieById: getMovieById
};