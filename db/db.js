const mongoose = require('mongoose');
//const { Schema } = mongoose;
const { Month } = require('./models')
const { Company } = require('./models')
const { Accounting } = require('./models')
const { Servcom } = require('./models')
const { Service } = require('./models')

const dbconnect = () => {
  return  mongoose.connect(`mongodb+srv://${process.env.dbUser}:${process.env.dbPasswd}@${process.env.dbHost}/ComunalPayment?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(db => {
      global.dbconnection = db;
    })
    .catch(err => {
      console.log(err);
    });
};

const getAccountings = async () => {
  global.dbconnection ?? await dbconnect();
  return await Accounting.find();
  //console.log(docs);
}

const getCompanies = async () => {
  global.dbconnection ?? await dbconnect();
  return await Company.find();
  //console.log(docs);
}

const getMonths = async () => {
  global.dbconnection ?? await dbconnect();
  return await Month.find();
}

const getServcoms = async () => {
  global.dbconnection ?? await dbconnect();
  return await Servcom.find();
  //console.log(docs);
}

const getServices = async () => {
  global.dbconnection ?? await dbconnect();
  return await Service.find();
  //console.log(docs);
}

//module.exports.getCompanies = getCompanies;
module.exports = {
  getCompanies: getCompanies,
  getAccountings: getAccountings,
  getMonths: getMonths,
  getServcoms: getServcoms,
  getServices: getServices
};
