var db = require('../../accessDB')
  , util = require('util');

// GET
exports.games = function (req, res) {
  console.log('*** games');

  db.getGames(function(err, games) {
    if (err) {
      console.log('*** games err');
      res.json({
        customers: games
      });
    } else {
      console.log('*** games ok');

      res.json(games);
    }
  });
};

exports.game = function (req, res) {
  console.log('*** customer');

  db.getGame(req.params.id, function(err, game) {
    if (err) {
      console.log('*** game err');
      res.json({
        customer: game
      });
    } else {
      console.log('*** game ok');

      res.json(game);
    }
  });
};

exports.insertGame = function (req, res) {
  console.log('*** insertGame ====  ' +  req.body);

      db.insertGame(req.body, function(err){
        if (err) {
          console.log('*** insertGame err');
          res.json(false);
        } else {
          console.log('*** insertGame ok');

          res.json(req.body);
        }
      });

};

 exports.editGame = function (req, res) {
  console.log('*** editGame');

      db.editGame(req.params.id, req.body, function(err) {
        if (err) {
          console.log('*** editGame err' + util.inspect(err));
          res.json({'status': false});
        } else {
          console.log('*** editGame ok');

          res.json({'status': true});
        }
      });
};

exports.deleteGame = function (req, res) {
  console.log('*** deleteGame');

  db.deleteGame(req.params.id, function(err) {
    if (err) {
      console.log('*** deleteGame err');
      res.json({'status': false});
    } else {
      console.log('*** deleteGame ok');
      res.json({'status': true});
    }
  });
};


exports.byGenre = function (req, res) {
  console.log('*** byGenre');

  db.getGamesByGenre(req.params.genre, function(err) {
    if (err) {
      console.log('*** byGenre err');
      res.json({'status': false});
    } else {
      console.log('*** byGenre ok');
      res.json({'status': true});
    }
  });
};




