const Router = require('express');
const categoriesController = require('../controllers/categoriesController');

const router = Router();

router.get('/', categoriesController.getCategory);

router.post('/', categoriesController.createCategory);

module.exports = router;
