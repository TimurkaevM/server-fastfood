const Router = require('express');

const router = Router();

router.use('/categories', require('./categoryRouter'));
router.use('/products', require('./productRouter'));
router.use('/basket', require('./basketRouter'));

module.exports = router;
