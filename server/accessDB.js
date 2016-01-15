// Module dependencies
var mongoose = require('mongoose')
  , CustomerService = require('./services/customer')
  , Customer = require('./models/customer')
  , State = require('./models/state')
  , User = require('./models/user')
  , util = require('util');

// connect to database
module.exports = {
  // Define class variable
  myEventID: null,

  // initialize DB
  startup: function(dbToUse) {
    mongoose.connect(dbToUse);
    // Check connection to mongoDB
    mongoose.connection.on('open', function() {
      console.log('We have connected to mongodb');
    });
  },

  // disconnect from database
  closeDB: function() {
    mongoose.disconnect();
  },

  getCustomers : CustomerService.getCustomers,
  getCustomersSummary : CustomerService.getCustomersSummary,
  insertCustomer : CustomerService.insertCustomer,
  getCustomer : CustomerService.getCustomer,
  editCustomer : CustomerService.editCustomer,
  deleteCustomer : CustomerService.deleteCustomer,
  getCustomerEmail : CustomerService.getCustomerEmail,

// get all the states
  getStates: function(callback) {
    console.log('*** accessDB.getStates');
    State.find({}, {}, function(err, states) {
      callback(null, states);
    });
  },

// get a state
  getState: function(stateId, callback) {
    console.log('*** accessDB.getState');
    State.find({'id': stateId}, {}, function(err, state) {
      callback(null, state);
    });
  }
};
