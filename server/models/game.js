var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;


var SettingsSchema1 = new Schema({
  collectionName : {
    type : String, required: true, trim: true, default: 'games'
  },
  nextSeqNumber: {
    type: Number, default: 1
  }
});

var GameReview = new Schema({
  Title : {
    type : String, required: true, trim: true
  },
  Content : {
    type : String, required: true, trim: true
  },
  Score : {
    type : Number, min: 0, max: 100
  },
  ReviewDate : {
    type : Date
  },
  userId : {
    type : Number
  },
  id : {
    type : Number, required: true, unique: true
  }
});

var GameSchema = new Schema({
  gameName : {
    type : String, required: true, trim: true
  },
  gameDesc : {
    type : String, required: true, trim: true
  },
  date : {
    type : Date, required: false, trim: true
  },
  score : {
    type : Number, required: false
  },
  cost : {
    type : Number, required: false
  },
  id : {
    type : Number, required: true, unique: true
  },
  pic : {
    type : String, required: false, trim: true
  },
  gameReviews : [GameReview],
  genre :{
    type :String , required:true
  }

});

GameSchema.index({ id: 1, type: 1 }); // schema level

// I make sure this is the last pre-save middleware (just in case)
var sse = mongoose.model('games', SettingsSchema1);
GameSchema.pre('save', function(next) {
  var doc = this;
  // Calculate the next id on new Customers only.
  if (this.isNew) {
    sse.findOneAndUpdate( {"collectionName": "games"}, { $inc: { nextSeqNumber: 1 } }, function (err, games) {
      if (err) next(err);
      doc.id = games.nextSeqNumber - 1; // substract 1 because I need the 'current' sequence number, not the next
      next();
    });
  } else {
    next();
  }
});

exports.GameSchema = GameSchema;
module.exports = mongoose.model('Game', GameSchema);
