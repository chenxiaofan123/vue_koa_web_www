const log = require('bunyan').createLogger({
    name: 'app'
});



/**
 * 查询用户现金信息
 * @param telephone
 * @returns {
 *      accountMoney:我的现金
 *      totalInterest:累计利息
 *      freezeMoney: 冻结现金
 * }
 */

function* getCashInfo() {
    var telephone = this.session.telephone;
    var url = '/account/info/getCashInfo';
    this.body = yield this.commonQuery.post(url, {
        telephone
    })
}


/**
 * 查询用户可用余额与可用金重
 * @param telephone
 * @returns {
 *      goldWeight: 账户中黄金可用重量
 *      money: 账户中可用余额
 * }
 */

function* getUsableMoneyAndWeight() {
    var telephone = this.session.telephone;
    var url = '/account/info/getUsableMoneyAndWeight';
    this.body = yield this.commonQuery.post(url, {
        telephone
    })
}


function * getRealInfo() {
    var url = "user/realName/hasRealInfo";
    var telephone = this.session.telephone||'';
    this.body = yield this.commonQuery.post(url,{
        telephone
    })
}
module.exports = {
    getCashInfo,
    getUsableMoneyAndWeight,
    getRealInfo
}