var express = require('express');
var db = require('../db/db');

class Response {
  constructor(status, type, message, data) {
    this.status = status;
    this.type = type;
    this.message = message;
    this.value = new Object();
    this.value.status = status;
    this.value.message = message;
    this.value.type = type;
    if(data) {
      this.value.data = data;
    }
  }
  
  sendResp(res) {
    res.status(this.status).type(this.type).jsonp(this.value);
  }
}

const prepareResp = (res, p) => {
  p.then(e => { new Response(200, 'json', 'OK', e).sendResp(res); })
  .catch(err => { console.log(err.stack); new Response(503, 'json', 'Error: Service Unavailable').sendResp(res); })
}

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/api/1/accountings/', function(req, res) {
  prepareResp(res, db.getAccountings());
});

router.post('/api/1/years/', function(req, res) {
  const arrYears = [];
  for(let year=global.startYear; year <= new Date().getYear()-100+2000; year++) {
    arrYears.push(year);
  }
  const yearProm = new Promise((resolve,reject) => {
      resolve(arrYears);
  });
  prepareResp(res, yearProm);
});

router.post('/api/1/months/', function(req, res) {
  prepareResp(res, db.getMonths());
});

router.post('/api/1/servcomps/', function(req, res) {
  prepareResp(res, db.getServcoms());
});

router.post('/api/1/services/', function(req, res) {
  prepareResp(res, db.getServices());
});

router.put('/api/1/order/', function(req, res) {
//  res.status(400).type('json').jsonp(JSONResp)
});

router.delete('/api/1/order/', function(req, res) {
//  res.status(400).type('json').jsonp(JSONResp)
});

module.exports = router;
