module.exports = function(db) {
  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var fieldSchema = new Schema({
      sportType: {
        type: String,
        enum: [ 'Fútbol 5', 'Fútbol 7', 'Fútbol 9', 'Fútbol 11' ]
      },
      complex: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complex'
      }
  });

  return db.model('Field', fieldSchema);
}
