const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    title: String,
    img: String,
    locale: String,
    sqft: Number,
    desc: String
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
