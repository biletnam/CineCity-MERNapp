const express = require('express');
const router = express.Router();

//Movie Model
const movie = require('../../models/movie');


//@route  GET api/movies
//@desc   GET movies with "alaffiche"
//@access Public
router.get('/', (req,res) => {
  movie.find( {"alaffiche": true})
    .exec()
    .then(movies => {
      res.status(200).json(movies)
    })
});

//@route  GET api/movies/:id
//@desc   GET a movies
//@access Public
router.get('/:id', (req,res) => {
  movie.findById(req.params.id)
    .then(movie => res.status(200).json(movie))
});

//@route  POST api/movies
//@desc   Create A movies
//@access Public
router.post('/', (req,res) => {
  const newMovie = new Movie({
    seance: req.body.seance,
    title: req.body.title,
    img: req.body.img,
    alaffiche: req.body.alaffiche
  });

  newMovie.save().then(movie => res.json(movie));
});

module.exports = router;
