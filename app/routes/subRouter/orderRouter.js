var router = require('koa-router')();
var orderController = require('../../controller/orderController');
module.exports = router.routes();

router.prefix('/order');
router.post('/getRechargeOrderDetail', orderController.getRechargeOrderDetail);
router.post('/pay/webPay', orderController.webPay);
router.post('/createRechargeOrder',orderController.createRechargeOrder);
router.post('/getRechargeOrderDetail', orderController.getRechargeOrderDetail)
