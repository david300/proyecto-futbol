module.exports = function(db) {

  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var eventSchema = new Schema({
      name: {
          type: String,
          required: true
      }
      users: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }],
      userCreator: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      },
      date: {
          type: Date,
          required: true
      },
      createdAt: {
          type: Date
      },
      field: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Field'
      }
  });

  return db.model('Event', eventSchema);
}
