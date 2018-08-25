const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const movieSchema = new Schema({
  seance: {
    type: Array,
    require: false
  },
  title: {
    type: String,
    require: false,
  },
  img: {
    type: String,
    require: false,
  },
  alaffiche: Boolean,
  require: false
});

module.exports = movie = mongoose.model('Movie', movieSchema);
