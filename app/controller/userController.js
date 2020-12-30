const log = require('bunyan').createLogger({
    name: 'app'
});
//用户登录接口
function* updateUserLogin() {
    var that = this;
    var telephone = this.request.body.telephone || '';
    var password = this.request.body.password || '';
    var url = "user/base/login";
    var result = yield this.commonQuery.post(url, {
        telephone,
        password
    })

    //登录成功 设置sessionId

    if (result.code === '0000') {
        this.session.sessionId = result.data.sessionid;
        this.session.telephone = telephone;
        var telephoneStr = telephone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
        ;
        this.cookies.set("telephone", telephoneStr, {
            httpOnly: false
        });
        this.body = {
            success: true,
            code: '0000'
        }
    } else {
        this.body = {
            code: result.code,
            msg: result.msg
        }
    }

}

/**
 * 检查用户是否是注册用户
 * @param telephone
 */

function* checkPhoneNum() {
    let telephone = this.request.body.telephone;
    let url = "user/base/checkPhoneNum";
    this.body = yield this.commonQuery.post(url, {
        telephone
    })
}

/**
 * 获取验证码
 * @param telephone
 * @param type：验证码类型（0为激活，1为重置登陆密码，2为重置支付密码，3pro版本店员校验用户手机号 4为登录）
 * @param authCodeType：验证码发送方式（1--短信；2--语音；）
 */

function* getCode() {
    let requestBody = this.request.body;
    let telephone = requestBody.telephone,
        type = 4,
        authCodeType = requestBody.authCodeType;
    let url = "user/base/sendSms";
    var result = yield  this.commonQuery.post('user/base/checkPhoneNum', {
        telephone
    });

    if (result.code === '0023') {
        //未注册用户 需要激活
        type = 0;
    }

    this.body = yield this.commonQuery.post(url, {
        telephone,
        type,
        authCodeType
    });
}

/**
 * 获取验证码 仅用户获取注册验证码  如果已经注册，则success == false
 * @param telephone
 * @param type：验证码类型（0为激活，1为重置登陆密码，2为重置支付密码，3pro版本店员校验用户手机号 4为登录）
 * @param authCodeType：验证码发送方式（1--短信；2--语音；）
 */
function * getAuthCode() {
    let requestBody = this.request.body;
    let telephone = requestBody.telephone,
        type = requestBody.type,
        authCodeType = requestBody.authCodeType;
    try{
        yield  this.commonQuery.post('user/base/checkPhoneNum', {
            telephone
        });
        this.body = {
            success: false,
            code:'0000'
        };
    } catch(e){
        if(+e.code == 23) {
            let url = "user/base/sendSms";
            let result = yield this.commonQuery.post(url, {
                telephone,
                type,
                authCodeType
            });
            this.body = Object.assign({}, result, {
                success:true
            })
        } else {
            throw  e;
        }
    }
}

/**
 * 验证码登录
 */

function* loginByValid() {
    let requestBody = this.request.body;
    let telephone = requestBody.telephone;
    let authCode = requestBody.authCode;
    let url = "user/base/loginByValid";
    let result = yield this.commonQuery.post(url, {
        telephone, authCode
    })

    if (result.code === '0000') {
        //sessionId 与session绑定
        this.session.sessionId = result.data.sessionid || result.data.sessionId;
        this.session.telephone = telephone;
        //客户端登录
        var telephoneStr = telephone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
        this.cookies.set("telephone", telephoneStr, {
            httpOnly: false
        });

        this.body = {
            success: true,
            code: '0000'
        }
    } else {
        this.body = {
            code: result.code,
            msg: result.msg
        }
    }


}

/**
 * /user/logout
 * @desc 退出登录&& 切换账号
 */

function* logout() {
    var telephone = this.session.telephone;
    var url = "user/base/logout";
    var result='';
    try{
       result=  yield this.commonQuery.post(url, {
            telephone
        });
        if(result.code==='0000'){
        	 //清除登录状态
            this.session=null;
            this.cookies.set('telephone');
            this.body ={
                success:true,
                code:'0000'
            }
        } else{
        	this.body=result;
        }
    } catch(e){
//      if(+e.code == 2 ){
//          //清除登录状态
//          this.session=null;
//          this.cookies.set('telephone');
//
//          this.body ={
//              success:true,
//              code:'0000'
//          }
//      } else{
//          throw e;
//      }
   }
   }



/*
 * desc 通过手机号和验证码注册
 * @*/
function *userRegisterByValid () {
    let ctxBody = this.request.body;
    let openId = ctxBody.openId;
    let telephone = ctxBody.telephone;
    let channel = ctxBody.channel||ctxBody.channelCode||'';
    let userInviteCode = ctxBody.userInviteCode||'';
    let authCode = ctxBody.authCode||'';
    let registSource = ctxBody.registSource||'';
    //如果注册失败，通过统一的错误处理进行
    yield this.commonQuery.post('/user/base/registerByValid',{
        telephone,
        openId,
        channel,
        userInviteCode,
        authCode,
        registSource
    });

    //接口调用成功，正常返回
    this.body = {
        success: true,
        code: "0000"
    };

}



module.exports = {
    updateUserLogin,
    checkPhoneNum,
    getCode,
    loginByValid,
    logout,
    userRegisterByValid,
    getAuthCode
}