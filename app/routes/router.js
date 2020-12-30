var router = require('koa-router')();
//var router = new Router();

var user = require('./subRouter/userRouter');
var infor = require('./subRouter/inforRouter');
var price = require('./subRouter/priceRouter');
var account = require('./subRouter/accountRouter');
var order = require('./subRouter/orderRouter');
var statistic = require('./subRouter/statisticUtil');

router.use(user);
router.use(infor);
router.use(price);
router.use(account);
router.use(order);
router.use(statistic);
router.post('/trade/tradeRechargeSuccess', function *() {
    this.response.redirect('/trade/tradeRechargeSuccess');
});

module.exports = router.middleware();