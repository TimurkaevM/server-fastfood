const Router = require('express');
const basketsController = require('../controllers/basketsController');

const router = Router();

router.get('/', basketsController.getBasket);

router.post('/', basketsController.createBasket);

module.exports = router;
