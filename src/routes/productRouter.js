const Router = require('express');
const productsController = require('../controllers/productController');

const router = Router();

router.get('/', productsController.getProduct);

router.post('/:id', productsController.createProduct);

module.exports = router;
