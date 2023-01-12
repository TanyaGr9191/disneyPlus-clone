"use strict";

var logger = require('../services/logger.service');

function log(req, res, next) {
  return regeneratorRuntime.async(function log$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          logger.info('Sample Logger Middleware');
          next();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  log: log
};