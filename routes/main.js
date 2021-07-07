const express = require('express');

var router = express.Router();

router.get('/quote', function(req, res){
  res.render('quote');
})

router.get('/*', function(req, res){
  res.render('index');
});

module.exports = router
