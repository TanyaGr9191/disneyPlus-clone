"use strict";

var express = require('express');

var router = express.Router();

var _require = require('./watchlist.controller'),
    getWatchlist = _require.getWatchlist,
    getWatchlistMovieById = _require.getWatchlistMovieById,
    addMovie = _require.addMovie,
    removeMovie = _require.removeMovie;

module.exports = router; // middleware that is specific to this router

router.get('/', getWatchlist);
router.get('/:id', getWatchlistMovieById);
router.post('/', addMovie);
router["delete"]('/:id', removeMovie);