const mongoose = require('mongoose');
const { Month } = require('./models')
const { Company } = require('./models')
const { Accounting } = require('./models')
const { Servcom } = require('./models')
const { Service } = require('./models')

const dbconnect = () => {
  const conStr = `${process.env.dbProtocol}${process.env.dbUser}:${process.env.dbPasswd}@${process.env.dbHost}${process.env.dbPort}/${process.env.dbName}?authSource=admin&readPreference=primary`;
  return  mongoose.connect(conStr, {useNewUrlParser: true })
.then(db => {
      global.dbconnection = db;
    })
    .catch(err => {
      console.log(err);
    });
};

const getAccountings = async (searchObj) => {
    global.dbconnection ?? await dbconnect();
    return await Accounting.find(searchObj);
}

const getCompanies = async () => {
  global.dbconnection ?? await dbconnect();
  return await Company.find();
}

const getMonths = async () => {
  global.dbconnection ?? await dbconnect();
  return await Month.find();
}

const getServcoms = async () => {
  global.dbconnection ?? await dbconnect();
  return await Servcom.find();
}

const getServices = async () => {
  global.dbconnection ?? await dbconnect();
  return await Service.find();
}

module.exports = {
  getCompanies: getCompanies,
  getAccountings: getAccountings,
  getMonths: getMonths,
  getServcoms: getServcoms,
  getServices: getServices
};
