const mongoose = require('mongoose');
const db = require('./models');
const data = require('./seedData.js');

const seedDB = function(){
  db.Project.remove({})
  .then(() => console.log('DB cleared!'))
  .catch(err => console.log(`Error: ${err}`));
  db.Project.create(data)
  .then(() => console.log('DB seeded!'))
  .catch(err => console.log(`Error: ${err}`));
}

module.exports = seedDB;
