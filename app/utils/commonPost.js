/**
 * Created by ckid_hjqb on 2016/12/23.
 */

const superagent = require('superagent');
const fs = require('co-fs');
const error = require('../utils/error.js');
const mock=require('mockjs');
const log = require('bunyan').createLogger({
    name: 'app'
});

const COMPLAINCODE = new Set([
    '0000', '0054', '0055', '0081'
]);//定义正常的返回码

const SPEAPI = new Set(["/account/info/getAccountInfo",
    "/account/info/getGoldInfo", "/account/water/getGoldWater", "/server/info/getMediaInfoTopList",
    "/server/info/getMediaInfoList", "/server/info/getMediaInfoDetail", "/user/info/getUserInformationDetail",
    "/server/info/getDepositPromotionList", "/server/info/getDepositInfoViewDetail",
    "/server/info/getDepositInfoViewList", "/server/info/getDepositInfo"]);

const commonRequestHeader = {
    "X-API-Key": 'foobar',
    "Accept": 'application/json',
    "VERSION": '3.2.0',
    'deviceId': 'WEB',
    'platform': 'PC',
    'scene': 'Web',
    'userAgent': 'Web',
    'channel': 'Web'
};

class CommonPost {
    constructor(ctx, testOption) {
            this._ctx = ctx;
            this.testOption = testOption;
        }
        // 预处理 url
    urlPreProcess(url) {
        if (url.startsWith('/')) {
            return url;
        } else {
            return '/' + url;
        }
    }

    /*处理测试请求*/
    *
    queryPreProcess(url,data) {
        let name = url.substring(url.lastIndexOf('/') + 1);
        //let path = './app/json/' + name + '.json';
        let path='../mock/'+name+'.js';
        
        let mockdata=require(path)(data);
        //let result = JSON.parse(yield fs.readFile(path, 'utf-8'));
        let result=mock.mock(mockdata);
        return result;
    };

    /*处理host测试*/
     hostPreProcess(url) {
        let host = GLOBAL_SERVERHOST;
        if (url == '/server/price/query' || url == '/comment/guessGoldPriceInfo') {
            host = GLOBAL_SERVERHOST2;
        }
        return host;
    }

    /*处理通用header*/
    headerPreProcess(url,postData) {
        let completeHeader = {};
        if(this._ctx.session.sessionId){
             completeHeader.sessionId = this._ctx.session.sessionId;
        }
           if(SPEAPI.has(url)){
            completeHeader.apiVersion = "3.0.0";
        }
        if (this._ctx.webIp) {
            completeHeader.webIp = this._ctx.webIp;
        }
        if (this._ctx.sessionId) {
            completeHeader.blackBox = 'hjqb' + this._ctx.sessionId;
        }
        return Object.assign({}, completeHeader, commonRequestHeader);

    }

    /*统一处理接口返回异常数据*/
    baseExceptionHandler(res) {
        let responseCode = res.body.code;
        if (!COMPLAINCODE.has(responseCode)) {
           //没有返回正确的返回码
           throw new error.InterfaceInvokeFail(responseCode, res.body.msg);
        } else {
           return res.body;
        }
        return res.body;
    }

    *
    post(url, postData) {
        let requestUrl = this.urlPreProcess(url);

        //如果是测试，则直接返回数据
        if (postData.test) {
            return yield this.queryPreProcess(requestUrl,postData);
        }
        let host = this.hostPreProcess(requestUrl);
        let header = this.headerPreProcess(requestUrl,postData);
        log.info({
            host: host,
            service: requestUrl,
            webIp: header.webIp
        });
        let res = yield superagent.post(host + requestUrl)
            .set(header)
            .type('application/json')
            .send(postData);
        if (res.status == 200) {
            log.info({
                req: {
                    url: url,
                    postData: postData
                },
                res: res.body
            });
            return this.baseExceptionHandler(res);

        } else {
            throw new error.JsonError(res.status);
        }
    }


    *
    get(url, getData,sessionId) {
        let requestUrl = this.urlPreProcess(url);

        //如果是测试，则直接返回数据
        if (this.getData.test) {
            return yield this.queryPreProcess(requestUrl,getData);
        }
        let host = this.hostPreProcess(requestUrl);
        let header = this.headerPreProcess(getData);
        log.info({
            host: host,
            service: requestUrl,
            webIp: header.webIp
        })
        let res = yield superagent.get(host + requestUrl)
            .set(header)
            .query(getData);
        if (res.status == '200') {
            log.info({
                req: {
                    url: url,
                    getData: getData,
                    sessionId: sessionId
                },
                res: res.body
            });
            return this.baseExceptionHandler(res);
        } else {
            throw new error.JsonError(res.status);
        }

    }

}


module.exports = function (isTest=false) {
    let testOption = {
        test: isTest
    }
    return function* (next) {
        let _ctx = this;
        this.webIp = this.headers['x-forwarded-for'] ||this.headers['x-real-ip'] ||this.socket.remoteAddress;
        //this注入post对象
        this.commonQuery = new CommonPost(_ctx, testOption);
        yield next;
    }
}