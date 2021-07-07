const Category = require('../models/Category');
const Product = require('../models/Product');

async function getProduct(req, res) {
  try {
    const product = await Product.find();

    res.send(product);
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'Error...' });
  }
}

async function createProduct(req, res) {
  try {
    const { name, price, img } = req.body;

    const category = await Category.findById(req.params.id);

    const product = new Product({
      name,
      price,
      img,
    });

    await product.save();

    Category.findByIdAndUpdate(
      req.params.id,
      {
        products: [...category.products, product],
      },
      { upsert: true },
      (err, category) => {
        if (err) {
          return res.status(500).json({ error: 'unsuccessful' });
        }
        res.json({ message: 'Продукт успешно добавлен' });
      },
    );
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'Error...' });
  }
}

module.exports = { createProduct, getProduct };
