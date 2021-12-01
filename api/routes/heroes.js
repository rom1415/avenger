var express = require('express');
var router = express.Router();
var heroesModel = require('../models/heroes.js');

/**
 * Get all heroes
 */
router.get('/heroes', function(req, res, next) {
  heroesModel.find({}, function(err, heroes){
    res.send(heroes);
  });
});

/**
 * Get a specific hero by ID
 */
router.get('/hero/:id', function(req, res, next){
  heroesModel.findById(req.params.id, function (err, item) {
    res.json(item);
  });
});

/**
 * Create a new hero
 * 
 * TODO Pass valid data
 */
router.post('/heroes', function(req, res, next){

  heroesModel.create({
    name: 'new hero',
    age: 30,
    realname: 'Real name hero',
    description:"With a description",
    status: 'actif'
  }).exec();
})


module.exports = router;
