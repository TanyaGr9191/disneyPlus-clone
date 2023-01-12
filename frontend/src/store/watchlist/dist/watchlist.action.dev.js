"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWatchlist = loadWatchlist;
exports.removeFromWatchlist = removeFromWatchlist;
exports.addToWatchlist = addToWatchlist;

var _watchlist = require("../../services/watchlist.service");

function loadWatchlist() {
  return function _callee(dispatch) {
    var watchlistMovies;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_watchlist.watchlistService.query());

          case 3:
            watchlistMovies = _context.sent;
            // console.log('watchlistMovies from DB:', watchlistMovies)
            dispatch({
              type: 'SET_WATCHLIST',
              watchlistMovies: watchlistMovies
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('Cannot set watchlist');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}

function removeFromWatchlist(movieId) {
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_watchlist.watchlistService.remove(movieId));

          case 3:
            dispatch({
              type: 'REMOVE_MOVIE',
              movieId: movieId
            });
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log('Cannot remove from watchlist');

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 6]]);
  };
}

function addToWatchlist(movie) {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_watchlist.watchlistService.add(movie));

          case 3:
            dispatch({
              type: 'ADD_MOVIE',
              movie: movie
            });
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.log('Cannot add to watchlist');

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 6]]);
  };
}