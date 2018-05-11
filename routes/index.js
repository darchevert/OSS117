var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var options = { server: { socketOptions: {connectTimeoutMS: 30000 } }};
mongoose.connect('mongodb://yoannherlaut:azerty@ds147469.mlab.com:47469/sacre-hubert', options , function(err) {
  console.log(err);
});

var favSchema = mongoose.Schema({
  name: String,
  punchline: String,
  photo:String,
  sound:String,
  user_id: String
});

var favModel = mongoose.model("fav", favSchema);

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
var UserModel = mongoose.model('users', userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/fav', function(req, res, next) {
  res.render('fav');
});

router.get('/myfav', function(req, res, next) {
  favModel.find(function(error, datas) {
    res.json(datas);
  })
});

router.post('/myfav', function(req, res, next) {
  var fav = new movieModel({
    poster_path: req.body.poster_path,
    title: req.body.title,
    overview: req.body.overview,
    idMovieDB: req.body.idMovieDB
  });
  fav.save(function(error, data){
    res.json({result: true});
  })
});

router.delete('/myfav/:favId', function(req, res, next) {
  console.log(req.params.movieId);
  favModel.remove({ idMovieDB: req.params.movieId}, function(error) {
      res.json({result: true});
    }
  );
});

module.exports = router;
