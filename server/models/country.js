module.exports = function(db) {
  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var countrySchema = new Schema({
      name: {
          type: String,
          required: true,
          index: {
              unique: true
          }
      }
  });

  return db.model('Country', countrySchema);
}
