"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../../services/db.service'),
    db = _require.db;

var logger = require('../../services/logger.service');

module.exports = {
  query: query,
  getById: getById,
  remove: remove,
  add: add
};

function query() {
  var watchlistSnapshot, watchlistMovies;
  return regeneratorRuntime.async(function query$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.collection('watchlist').get());

        case 3:
          watchlistSnapshot = _context.sent;
          watchlistMovies = [];
          watchlistSnapshot.forEach(function (doc) {
            watchlistMovies.push(_objectSpread({
              _id: doc.id
            }, doc.data()));
          });
          return _context.abrupt("return", watchlistMovies);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          logger.error('cannot find watchlist', _context.t0);
          throw _context.t0;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function getById(watchlistMovieId) {
  var watchlistRef, watchSnaphot;
  return regeneratorRuntime.async(function getById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          watchlistRef = db.collection('watchlist');
          _context2.next = 4;
          return regeneratorRuntime.awrap(watchlistRef.doc("".concat(watchlistMovieId)).get());

        case 4:
          watchSnaphot = _context2.sent;

          if (watchSnaphot.exists) {
            _context2.next = 8;
            break;
          }

          console.log('No matching movie in watchlist.');
          return _context2.abrupt("return");

        case 8:
          console.log('watchSnaphot', watchSnaphot);
          return _context2.abrupt("return", watchSnaphot);

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          logger.error("while finding watchlist movie ".concat(watchlistMovieId), _context2.t0);
          throw _context2.t0;

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function remove(watchlistMovieId) {
  var watchlistRef, watchlistSnapshot;
  return regeneratorRuntime.async(function remove$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // Make movie reference 
          watchlistRef = db.collection('watchlist'); // Get round from collectiton

          _context3.next = 4;
          return regeneratorRuntime.awrap(watchlistRef.doc("".concat(watchlistMovieId)).get());

        case 4:
          watchlistSnapshot = _context3.sent;

          if (watchlistSnapshot.exists) {
            _context3.next = 8;
            break;
          }

          console.log('Cannot find movie in watchlist');
          return _context3.abrupt("return");

        case 8:
          if (!(watchlistSnapshot.data()._id !== watchlistMovieId)) {
            _context3.next = 11;
            break;
          }

          console.log('Watchlist does not own movie');
          return _context3.abrupt("return");

        case 11:
          _context3.next = 13;
          return regeneratorRuntime.awrap(watchlistRef.doc("".concat(watchlistMovieId))["delete"]());

        case 13:
          console.log("Movie ".concat(watchlistSnapshot.id, " deleted successfully"));
          return _context3.abrupt("return", watchlistMovieId);

        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](0);
          logger.error("cannot remove movie from watchlist ".concat(watchlistMovieId), _context3.t0);
          throw _context3.t0;

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

function add(watchlistMovie) {
  var watchlistRef, watchlistSnapshot;
  return regeneratorRuntime.async(function add$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          watchlistRef = db.collection('watchlist');
          _context4.next = 4;
          return regeneratorRuntime.awrap(watchlistRef.doc(watchlistMovie._id).set(_objectSpread({}, watchlistMovie)));

        case 4:
          watchlistSnapshot = _context4.sent;
          return _context4.abrupt("return", watchlistSnapshot);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          logger.error('cannot insert movie to watchlist', _context4.t0);
          throw _context4.t0;

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
}