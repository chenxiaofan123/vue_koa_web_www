var router = require('koa-router')();
var accountController = require('../../controller/accountController')
module.exports = router.routes();
router.prefix('/account')
router.get('/info/getCashInfo', accountController.getCashInfo)
router.post('/info/getUsableMoneyAndWeight', accountController.getUsableMoneyAndWeight);
router.get('/getRealInfo', accountController.getRealInfo);