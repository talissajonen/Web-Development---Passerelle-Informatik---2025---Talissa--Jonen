var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My first page - Web Development Passerelle Informatik 2025' });
});

module.exports = router;