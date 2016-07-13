const createError = require('http-errors');

module.exports = result => result || Promise.reject(createError(404));