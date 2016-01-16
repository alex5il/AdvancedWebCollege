var db = require('../../accessDB')
  , util = require('util');

exports.insertGameReview = function (req, res) {
  console.log('*** insertGameReview ====  ' +  req.body);

      db.insertReview(req.body, function(err){
        if (err) {
          console.log('*** insertGameReview err');
          res.json(false);
        } else {
          console.log('*** insertGameReview ok');

          res.json(req.body);
        }
      });

};

exports.groupByScore = function (req, res) {
  console.log('*** groupByScore');

  db.groupByScore(req.params.gameName, function(err,gamesR) {
      if (err) {
        console.log('*** byFilters err');
        res.json({'status': false});
      } else {
        console.log('*** byFilters ok');
        res.json(gamesR);
      }
    });
};

 exports.editGameReview = function (req, res) {
  console.log('*** editGameReview');

      db.editReview(req.params.id, req.body, function(err) {
        if (err) {
          console.log('*** editGameReview err' + util.inspect(err));
          res.json({'status': false});
        } else {
          console.log('*** editGameReview ok');

          res.json({'status': true});
        }
      });
};

exports.deleteGameReview = function (req, res) {
  console.log('*** deleteGameReview');

  db.deleteGameReview(req.params.id, function(err) {
    if (err) {
      console.log('*** deleteGameReview err');
      res.json({'status': false});
    } else {
      console.log('*** deleteGameReview ok');
      res.json({'status': true});
    }
  });
};


exports.byFilters = function (req, res) {
  console.log('*** byFilters');

  db.getGamesReviewByFilter(req.query, function(err, gamesR) {
    if (err) {
      console.log('*** byFilters err');
      res.json({'status': false});
    } else {
      console.log('*** byFilters ok');
      res.json(gamesR);
    }
  });
};




