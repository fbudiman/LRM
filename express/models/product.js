var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var productsSchema = new Schema({
  title: String,
  price: String,
  description: String,
  imageURL: String,
  size: String,
  category: String
})

module.exports = mongoose.model('Product', productsSchema)
