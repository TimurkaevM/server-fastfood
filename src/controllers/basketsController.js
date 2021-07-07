const Basket = require('../models/Basket');

async function getBasket(req, res) {
  try {
    const basket = await Basket.find();

    res.send(basket);
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'Error...' });
  }
}

async function createBasket(req, res) {
  try {
    const { items, price, street, house } = req.body;

    const newBasket = new Basket({
      items, 
      price, 
      street, 
      house, 
    });

    await newBasket.save();
    res.json({ message: 'Заказ успешно отправлен' });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'Error...' });
  }
}

module.exports = { getBasket, createBasket };
