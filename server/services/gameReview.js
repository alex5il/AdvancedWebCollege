// Module dependencies
var GameReview = require('../models/gameReview');

module.exports = {

  // insert a game
  insertReview: function(req_body, callback) {
    console.log('*** accessDB.insertReview');

    var gameReview = new GameReview();

    gameReview.gameName = req_body.gameName;
    gameReview.title = req_body.title;
    gameReview.score = req_body.score;
    gameReview.reviewDate = req_body.reviewDate;
    gameReview.userId = req_body.userId;
    gameReview.id = req_body.id;

    gameReview.save(function(err, gameReview) {
      if (err)
      {console.log('*** new gameReview save err: ' + err); return callback(err); }
      callback(null, gameReview.id);
    });
  },

  // insert a game
  editReview: function(id, req_body, callback) {
    console.log('*** accessDB.editReview');

    GameReview.findOne({'id': id}, function(err, game) {
      if (err) { return callback(err); }
      var gameReview = new Game();
      gameReview.gameName = req_body.gameName || game.gameName;
      gameReview.title = req_body.gameDec || game.gameDec;
      gameReview.score = req_body.pic || game.pic;
      gameReview.reviewDate = req_body.cost || game.cost;
      gameReview.score = req_body.score || game.score;
      gameReview.userId = req_body.date || game.date;
      gameReview.id = req_body.genre || game.genre;

      gameReview.save(function(err) {
        if (err) { console.log('*** accessDB.editReview err: ' + err); return callback(err); }

        callback(null);
      });
    });
  },

  // delete a game
  deleteGameReview: function(id, callback) {
    console.log('*** accessDB.deleteGame');
    GameReview.remove({'id': id}, function(err, gameReview) {
      callback(null);
    });
  },

  // get all the games
  getGamesReviewByFilter: function(params, callback) {
    var myFilter = {};
    if(params.gameName && params.gameName !=="")
      myFilter['gameName'] = params.gameName;
    if(params.score && params.score !=="")
      myFilter['score'] = params.score;
    console.log('*** accessDB.getGamesByFilter');
    GameReview.find(myFilter,function(err, gameReview) {
      callback(null, games);

    });
  }
};