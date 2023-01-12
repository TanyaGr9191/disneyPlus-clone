"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../../services/db.service'),
    db = _require.db;

var logger = require('../../services/logger.service');

module.exports = {
  query: query,
  getById: getById
};

function query() {
  var filterBy,
      moviesRef,
      snapshot,
      allMovies,
      filteredMovies,
      title,
      _args = arguments;
  return regeneratorRuntime.async(function query$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filterBy = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          _context.prev = 1;
          moviesRef = db.collection('movies');
          _context.next = 5;
          return regeneratorRuntime.awrap(moviesRef.get());

        case 5:
          snapshot = _context.sent;

          if (!snapshot.empty) {
            _context.next = 9;
            break;
          }

          console.log('No matching movies.');
          return _context.abrupt("return");

        case 9:
          allMovies = [];
          snapshot.forEach(function (doc) {
            allMovies.push(_objectSpread({
              _id: doc.id
            }, doc.data()));
          });
          filteredMovies = allMovies;
          title = filterBy.title;

          if (title && title.trim()) {
            filteredMovies = allMovies.filter(function (movie) {
              return movie.title.toLowerCase().includes(title.toLowerCase());
            });
          }

          return _context.abrupt("return", filteredMovies);

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](1);
          logger.error('cannot find movies', _context.t0);
          throw _context.t0;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 17]]);
}

function getById(movieId) {
  var movieSnapshot;
  return regeneratorRuntime.async(function getById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db.collection('movies').doc("".concat(movieId)).get());

        case 3:
          movieSnapshot = _context2.sent;

          if (movieSnapshot.exists) {
            _context2.next = 7;
            break;
          }

          console.log('No matching movie.');
          return _context2.abrupt("return");

        case 7:
          return _context2.abrupt("return", movieSnapshot);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          logger.error("while finding movie ".concat(movieId), _context2.t0);
          throw _context2.t0;

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}