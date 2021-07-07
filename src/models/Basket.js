const { Schema, model } = require('mongoose');

const Basket = new Schema(
  {
    items: {type: Array, required: true},
    price: { type: Number, required: true },
    street: { type: String, required: true },
    house: { type: String, required: true },
  },
);

module.exports = model('Basket', Basket);