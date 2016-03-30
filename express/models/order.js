var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
  cart:
  [{
    productId: String,
    quantity: Number
  }]
})
