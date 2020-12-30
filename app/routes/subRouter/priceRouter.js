/**
 * Created by wanglin on 2017/3/6.
 */
/**
 * Created by wanglin on 2017/3/6.
 */
var router = require('koa-router')();
var priceController = require("../../controller/priceController");
module.exports = router.routes();
router.prefix('/price');
router.post('/query', priceController.query);
router.post('/marketprice', priceController.marketPrice);