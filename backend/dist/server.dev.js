"use strict";

var express = require('express');

var cookieParser = require('cookie-parser');

var cors = require('cors');

var path = require('path');

var app = express();

var http = require('http').createServer(app); // Express App Config


app.use(cookieParser());
app.use(express.json());
app.use(express["static"]('public'));

if (process.env.NODE_ENV === 'production') {
  // Express serve static files on production environment
  app.use(express["static"](path.resolve(__dirname, 'public')));
} else {
  // Configuring CORS
  var corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true
  };
  app.use(cors(corsOptions));
}

var movieRoutes = require('./api/movies/movie.routes');

var watchlistRoutes = require('./api/watchlist/watchlist.routes'); //routes


app.use('/api/movie', movieRoutes);
app.use('/api/watchlist', watchlistRoutes); // Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/toy/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue-router to take it from there

app.get('/**', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var logger = require('./services/logger.service');

var port = process.env.PORT || 3030;
http.listen(port, function () {
  logger.info('Server is running on port: ' + port);
});