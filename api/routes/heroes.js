var express = require('express');
var router = express.Router();
var heroesModel = require('../models/heroes.js');

/* GET home page. */
router.get('/heroes', function(req, res, next) {
  res.send('GET /heroes');
});

router.post('/heroes', function(req, res, next){
  res.send('POST /hero')
})


module.exports = router;
