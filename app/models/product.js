var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

var ProductSchema = new Schema({
  productname: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  producttype: {type: String, required: true},
  imagePath: {type: String, required: true}
});

module.exports = mongoose.model('Product', ProductSchema);
