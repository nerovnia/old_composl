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
    if (data) {
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

const getInitCollections = async (db) => {
  const oResp = {};
  oResp.data = {};
  //oResp.data.accountings = await db.getAccountings();
  oResp.data.companies = await db.getCompanies();
  oResp.data.months = await db.getMonths();
  oResp.data.servcoms = await db.getServcoms();
  oResp.data.services = await db.getServices();
  oResp.status = 200;
  oResp.text = "OK";
  return oResp;
}

const getAccountings = async (db, searchString) => {
  const oResp = {};
  oResp.data = {};
  oResp.data.accountings = await db.getAccountings(searchString);
  oResp.status = 200;
  oResp.text = "OK";
  return oResp;
}


/* GET home page. */
router.get('/', function (req, res) {
  console.log('++++++++++++++++++++++++++')
  res.render('index', { title: 'Express' });
});

router.post('/api/1', function (req, res) {
  let oResp = {};
  const searchObj = { year: 2021, company: "62a3ab4d75bdd92f67dbe24b"};
  switch (req.query.getCollections) {
    case 'init':
      //oResp = getInitCollection(db);
      getInitCollections(db)
        .then(
          result => res.status(200).type('json').jsonp(result),
          error => res.status(500).type('json').jsonp(error)
        );
      break;
    case 'accountings':
      getAccountings(db, searchObj )
        .then(
          result => res.status(200).type('json').jsonp(result),
          error => res.status(500).type('json').jsonp(error)
        );
      break;
    default:
      oResp.status = 405
      oResp.text = "405"
      oResp.message = "Method Not Allowed"
      res.status(oResp.status).type('json').jsonp(oResp)
  }
});


router.post('/api/1/accountings/', function (req, res) {
  prepareResp(res, db.getAccountings());
});

router.post('/api/1/years/', function (req, res) {
  const arrYears = [];
  for (let year = global.startYear; year <= new Date().getYear() - 100 + 2000; year++) {
    arrYears.push(year);
  }
  const yearProm = new Promise((resolve, reject) => {
    resolve(arrYears);
  });
  prepareResp(res, yearProm);
});

router.post('/api/1/months/', function (req, res) {
  prepareResp(res, db.getMonths());
});

router.post('/api/1/servcomps/', function (req, res) {
  prepareResp(res, db.getServcoms());
});

router.post('/api/1/services/', function (req, res) {
  prepareResp(res, db.getServices());
});

router.put('/api/1/order/', function (req, res) {
  //  res.status(400).type('json').jsonp(JSONResp)
});

router.delete('/api/1/order/', function (req, res) {
  //  res.status(400).type('json').jsonp(JSONResp)
});

module.exports = router;