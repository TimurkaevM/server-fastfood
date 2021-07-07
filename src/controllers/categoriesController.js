const Category = require('../models/Category');

async function getCategory(req, res) {
  try {
    const category = await Category.find().populate(
      'products',
      'name price delivery img',
    );

    res.send(category);
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'Error...' });
  }
}

async function createCategory(req, res) {
  try {
    const { name } = req.body;

    const category = await Category.findOne({ name });

    if (category) {
      return res
        .status(409)
        .json({ message: 'Категория с таким именем уже существует' });
    }

    const newCategory = new Category({
      name,
    });

    await newCategory.save();
    res.json({ message: 'Категория успешно добавлена' });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'Error...' });
  }
}

module.exports = { createCategory, getCategory };
