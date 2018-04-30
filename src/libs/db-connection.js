// connec to mongodb

const mongoose = require('mongoose');

let db;

module.exports = function Connection(){
  if(!db){
    db = mongoose.connect('mongodb://localhost/first-crud');
  }
  return db;
}