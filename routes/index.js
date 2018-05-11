var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/fav', function(req, res, next) {
  res.render('fav');
});

module.exports = router;
