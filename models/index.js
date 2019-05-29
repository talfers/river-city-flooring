const mongoose = require('mongoose');
const authDB = require('../authDB');
mongoose.set('debug', true);
mongoose.connect(`mongodb://${authDB.user}:${authDB.password}@ds153400.mlab.com:53400/rivercity-hardwood`, { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Project = require('./project');
