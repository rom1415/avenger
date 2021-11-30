var express = require('express');
var router = express.Router();
var heroesModel = require('../models/heroes.js');

/* GET home page. */
router.get('/heroes', function(req, res, next) {
  heroesModel.find({}, function(err, heroes){
    res.send(heroes);
  });
});

router.get('/hero/:id', function(req, res, next){
  heroesModel.findById(req.params.id, function (err, item) {
    res.json(item);
  });
});

router.post('/heroes', function(req, res, next){

  heroesModel.create({
    name: 'new hero',
    age: 30,
    status: 'actif'
  });

  res.send('POST /hero');
})


module.exports = router;
