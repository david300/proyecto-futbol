module.exports = function(db) {

  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var complexSchema = new Schema({
      name: {
          type: String,
          required: true,
          index: {
              unique: true
          }
      },
      address: {
          type: String,
          required: true
      },
      geo: {
          lon: {
              type: Number,
              default: 0,
              require: true
          },
          lat: {
              type: Number,
              default: 0,
              require: true
          }
      }
  });

  return db.model('Complex', complexSchema);
}
