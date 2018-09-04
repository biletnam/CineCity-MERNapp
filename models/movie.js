const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const movieSchema = new Schema({
  seance: {
    type: Array
  },
  title: {
    type: String
  },
  poster: {
    type: String
  },
  img: {
    type: String
  },
  two_dim: {
    type: Boolean
  },
  three_dim:{
    type: Boolean
  },
  vf: {
    type : Boolean
  },
  vo: {
    type : Boolean
  },
  first_genre: {
    type : String
  },
  second_genre: {
    type : String
  },
  from: {
    type : String
  },
  with: {
    type : Array
  },
  release_date: {
    type : String
  },
  synopsis: {
    type : String
  },
  rating: {
    type : Number
  },
  alaffiche: {
    type :Boolean
  }
});

module.exports = movie = mongoose.model('Movie', movieSchema);
