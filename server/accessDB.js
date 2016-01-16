// Module dependencies
var mongoose = require('mongoose')
  , CustomerService = require('./services/customer')
  , GameService = require('./services/game')
  , GameReviewService = require('./services/gameReview')
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

  insertReview : GameReviewService.insertReview,
  editReview : GameReviewService.editReview,
  deleteGameReview : GameReviewService.deleteGameReview,
  getGamesReviewByFilter : GameReviewService.getGamesReviewByFilter,

  getGames : GameService.getGames,
  getGame : GameService.getGame,
  insertGame : GameService.insertGame,
  editGame : GameService.editGame,
  deleteGame : GameService.deleteGame,
  getGamesByFilter : GameService.getGamesByFilter,
  insertReview : GameService.insertReview,

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
