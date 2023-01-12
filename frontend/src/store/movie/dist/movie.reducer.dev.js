"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieReducer = movieReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  movies: null,
  filterBy: null,
  // isLoading: false,
  movie: null
};

function movieReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = state; // let movies

  switch (action.type) {
    case 'SET_MOVIES':
      newState = _objectSpread({}, state, {
        movies: action.movies
      });
      break;

    case 'SET_MOVIE':
      newState = _objectSpread({}, state, {
        movie: action.movie
      });
      break;

    case 'SET_FILTER_BY':
      newState = _objectSpread({}, state, {
        filterBy: _objectSpread({}, action.filterBy)
      });
      break;

    default:
      newState = state;
      break;
  } // For debug:
  // window.movieState = newState
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)


  return newState;
}