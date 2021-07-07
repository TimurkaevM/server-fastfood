const { Schema, model } = require('mongoose');

const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    delivery: { type: Boolean, required: true, default: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Product', Product);
