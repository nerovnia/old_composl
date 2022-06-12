var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/1/months/', function(req, res, next) {
  res.status(400).send('Bad Request')
});





module.exports = router;
