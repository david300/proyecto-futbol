function toLower (v) {
  return v.toLowerCase();
}
module.exports = function(db) {

  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var userSchema = new Schema({
      email: {
          type: String,
          required: true,
          index: {
              unique: true
          },
          set: toLower
      },
      password: {
          type: String,
          required: true
      },
      name: {
          type: String,
          required: true
      },
      country: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Country'
      },
      events: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Event'
      }],
      joinDate: {
          type: Date
      },
      complexes: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Complex'
      }]
  });

  return db.model('User', userSchema);
}
