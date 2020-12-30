const log = require('bunyan').createLogger({
    name: 'app'
});

module.exports = {
    getRechargeOrderDetail,
    webPay,
    createRechargeOrder
}

/**
 * 获取充值详情信息
 * @param telephone, orderNo
 */

function * getRechargeOrderDetail(){
    var telephone = this.session.telephone;
    var orderNo = this.request.body.orderNo;
    var url = 'order/getRechargeOrderDetail'
    this.body = yield this.commonQuery.post(url, {
        telephone,
        orderNo
    })
}

/**
 * 网银支付接口
 * @param telephone
 *        orderNo
 *        isUseCashBalance 是否使用余额支付
 *        password
 *        couponId 优惠券id
 *        bankCode 银行代码
 */

function * webPay(){
    var telephone = this.session.telephone;
    var requestBody = this.request.body;
    var orderNo = requestBody.orderNo;
    var isUseCashBalance = requestBody.isUseCashBalance;
    var password = requestBody.password;
    var bankCode = requestBody.bankCode;
    var couponId = requestBody.couponId;
    var url = '/order/pay/webPay';

    this.body = yield this.commonQuery.post(url, {
        telephone,
        orderNo,
        isUseCashBalance,
        password,
        bankCode,
        couponId
    })
}

function * createRechargeOrder() {
    let telephone = this.session.telephone;
    let money = this.request.body.money;
    let url = "account/recharge/createRechargeOrder";
    this.body = yield this.commonQuery.post(url, {
        telephone,
        money
    })
}
