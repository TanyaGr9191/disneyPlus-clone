"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMovies = loadMovies;
exports.loadMovie = loadMovie;
exports.setFilterBy = setFilterBy;

var _movie = require("../../services/movie.service");

function loadMovies() {
  return function _callee(dispatch, getState) {
    var filterBy, movies;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            filterBy = getState().movieModule.filterBy;
            _context.next = 4;
            return regeneratorRuntime.awrap(_movie.movieService.query(filterBy));

          case 4:
            movies = _context.sent;
            // console.log('Movies from DB:', movies)
            dispatch({
              type: 'SET_MOVIES',
              movies: movies
            }); // showSuccessMsg('Movies set')

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log('Cannot set movies'); // showErrorMsg('Cannot load movies')

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
}

function loadMovie(movieId) {
  return function _callee2(dispatch) {
    var movie;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_movie.movieService.getById(movieId));

          case 3:
            movie = _context2.sent;
            // console.log('Movie from DB:', movie)
            dispatch({
              type: 'SET_MOVIE',
              movie: movie
            }); // showSuccessMsg('Movies set')

            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log('Cannot set movie'); // showErrorMsg('Cannot load movie')

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}

function setFilterBy(filterBy) {
  return function (dispatch) {
    dispatch({
      type: 'SET_FILTER_BY',
      filterBy: filterBy
    });
  };
}