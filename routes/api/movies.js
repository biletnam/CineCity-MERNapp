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
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//@route  GET api/movies/:id
//@desc   GET a movies
//@access Public
router.get('/:id', (req,res) => {
  movie.findById(req.params.id)
    .exec()
    .then(movie => res.status(200).json(movie))
    .catch(err => console.log(err));
});

//@route  UPDATE api/movies/:id
//@desc   Update A movie
//@access Public
router.patch('/:id', (req,res) => {
  const id = req.params.id;
  const updateOps = req.body;

  movie.update({_id: id}, {$set : updateOps})
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

//@route  UPDATE api/movies/seance/:id
//@desc   Update A movie
//@access Public
router.patch('/seance/:id', (req,res) => {
  const id = req.params.id;
  const updateOps = req.body;
  const seanceid = updateOps.seanceid;
  const dayid = updateOps.dayid;
  const value = updateOps.value;

  const ops = {$inc: {['seance.'+ dayid + '.seance.' + seanceid + '.place']: value}};

  movie.update({_id: id}, ops)
    .exec()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

module.exports = router;
