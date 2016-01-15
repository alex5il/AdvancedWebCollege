var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;


var SettingsSchema = new Schema({
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
  gameDec : {
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
  genre : {
    id : {
      type : Number
    },
    title : {
      type : String, required: false, trim: true
    },
    desc : {
      type :  String, required: false, trim: true
    }
  }
});

GameSchema.index({ id: 1, type: 1 }); // schema level

/*// I make sure this is the last pre-save middleware (just in case)
var Settings = mongoose.model('settings', SettingsSchema);*/

GameSchema.pre('save', function(next) {
  var doc = this;
  // Calculate the next id on new Customers only.
  if (this.isNew) {
    Settings.findOneAndUpdate( {"collectionName": "games"}, { $inc: { nextSeqNumber: 1 } }, function (err, settings) {
      if (err) next(err);
      doc.id = settings.nextSeqNumber - 1; // substract 1 because I need the 'current' sequence number, not the next
      next();
    });
  } else {
    next();
  }
});

exports.GameSchema = GameSchema;
module.exports = mongoose.model('Game', GameSchema);
