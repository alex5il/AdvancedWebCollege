// Module dependencies
var Game = require('../models/game');

module.exports = {

  // get all the games
  getGames: function(callback) {
    console.log('*** accessDB.getGames');
    Game.find({}, {'_id': 0, 'gameName':1, 'gameDec':1, 'date': 1, 'score': 1, 'cost': 1, 'id': 1, 'genre': 1}, function(err, games) {
      callback(null, games);
    });
  },

  // get a games
  getGame: function(id, callback) {
    console.log('*** accessDB.getGame');
    Game.find({'id': id}, {}, function(err, game) {
      callback(null, game[0]);
    });
  },

  // insert a game
  insertGame: function(req_body, callback) {
    console.log('*** accessDB.insertGame');

    var game = new Game();

    game.gameName = req_body.gameName;
    game.gameDec = req_body.gameDec;
    game.cost = req_body.cost;
    game.score = req_body.score;
    game.date = req_body.date;
    game.genre = req_body.genre;
    game.id = 1; // The id is calculated by the Mongoose pre 'save'.

    game.save(function(err, game) {
      if (err)
        {console.log('*** new game save err: ' + err); return callback(err); }
      callback(null, game.id);
    });
  },

  editGame: function(id, req_body, callback) {
    console.log('*** accessDB.editGame');

    Game.findOne({'id': id}, {'_id': 0, 'gameName':1, 'gameDec':1, 'date': 1, 'score': 1, 'cost': 1, 'id': 1, 'genre': 1}, function(err, game) {
      if (err) { return callback(err); }

      game.gameName = req_body.gameName || game.gameName;
      game.gameDec = req_body.gameDec || game.gameDec;
      game.cost = req_body.cost || game.cost;
      game.score = req_body.score || game.score;
      game.date = req_body.date || game.date;
      game.genre = req_body.genre || game.genre;

      game.save(function(err) {
        if (err) { console.log('*** accessDB.editGame err: ' + err); return callback(err); }

        callback(null);
      });

    });
  },

  // delete a game
  deleteGame: function(id, callback) {
    console.log('*** accessDB.deleteGame');
    Game.remove({'id': id}, function(err, game) {
      callback(null);
    });
  },

  // get all the games
  getGamesByGenre: function(genre, callback) {
    console.log('*** accessDB.getGames');
    Game.find({'genre':genre}, {'_id': 0, 'gameName':1, 'gameDec':1, 'date': 1, 'score': 1, 'cost': 1, 'id': 1, 'genre': 1}, function(err, games) {
      callback(null, games);
    });
  }
};
