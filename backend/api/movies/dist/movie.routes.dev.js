"use strict";

var express = require('express');

var _require = require('./movie.controller'),
    getMovies = _require.getMovies,
    getMovieById = _require.getMovieById;

var router = express.Router(); // middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getMovies);
router.get('/:id', getMovieById);
module.exports = router;