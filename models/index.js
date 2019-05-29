var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/rchf', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Project = require('./project');
