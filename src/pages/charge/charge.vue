<style lang="less" scoped>
    @import "../../less/config";
    /*公共的class*/
    .charge-wrapper {
        padding-top: 100px;
        line-height: 1;
        .title {
            font-size: 20px;
            color: #333333;
            text-align: left;
        }
        .num {
            font-size: 36px;
            color: #ffba5f;
            text-align: left;
        }
        .btn {
            border-radius: 4px;
            width: 400px;
            height: 52px;
            background: #ffba5f;
            text-align: center;
            line-height: 52px;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            
            &.disabled{
            	background:gray;
            }
        }
    }

    .charge-account-wrapper {
        padding-bottom: 100px;
        & > div {
            display: inline-block;
        }
        .login-to {
            padding-top: 10px;
            font-size: 20px;
            color: #a0a0a0;
            text-align: right;
            cursor: pointer;
        }
        .account-img-wrapper {
            background: #fafafc;
            border: 1px solid #d8d8d8;
            border-radius: 4px;
            width: 210px;
            height: 278px;
            .account-img {
                width: 67px;
                height: 80px;
                margin: 0 auto;
                margin-bottom: 33px;
                margin-top: 66px;
                background-image: url("./account-man.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
            .account-tel {
                font-size: 36px;
                color: #a0a0a0;
                text-align: center;
                .fontSpec;
            }

        }
        .charge-account-info-wrapper {
            margin-left: 100px;
            width: 400px;
            vertical-align: top;
            .account-remains {
                margin-top: 10px;
                .fontSpec;
            }
            .charge-amount-tag {
                margin-top: 50px;
                margin-bottom: 20px;
            }
            .charge-input-wrapper {
                margin-bottom: 20px;

                border: 1px solid #d8d8d8;
                border-radius: 4px;
                padding-left: 2px;
                input {
                    height: 50px;
                    width: 340px;
                    line-height: 100%;
                    font-size: 20px;
                    border: none;
                    padding-left: 16px;
                }
                .money-unit {
                    display: inline-block;
                    width: 20px;
                    font-size: 20px;
                    color: #333333;
                }
            }
        }
    }

    .bankLogoWrap(@imgName, @bgWidth, @bgHeight) {
        background-image: url(@imgName);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: @bgWidth;
        height: @bgHeight;
    }

    .bank-choose-wrapper {
        padding-bottom: 100px;
        .bank-choose-above-wrapper {
            margin-bottom: 10px;
            font-size: 0;
            word-spacing: -13px;
            & > div {
                display: inline-block;
                width: 50%;
            }
            .left {
                text-align: left;
            }
            .right {
                vertical-align: top;
            }
            .right > div {
                text-align: right;
            }
            .title {
                margin-bottom: 10px;
            }
            .title-tips {
                line-height: 36px;
                font-size: 16px;
                color: #333333;
            }
        }
        .bank-choice-item-wrapper {
            margin-left: -20px;
            padding-bottom: 34px;
            .bank-logo-card {
                position: relative;
                margin-left: 15px;
                margin-bottom: 16px;
                box-sizing: border-box;
                display: inline-block;
                border: 1px solid #d8d8d8;
                border-radius: 4px;
                width: 288px;
                height: 68px;
                cursor: pointer;
                &.choose {
                    border: 2px solid #ffba5f;
                    border-radius: 4px;
                }
                .active-icon {
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
                    height: 20px;
                    width: 20px;
                    background-image: url("./check.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                .logo-wrapper {
                    display: table-cell;
                    width: 288px;
                    height: 68px;
                    text-align: center;
                    vertical-align: middle;
                    i {
                        display: block;
                        margin: 0 auto;
                        vertical-align: middle;
                    }
                }
            }
            .bank-pos-num1 {
                i {
                    .bankLogoWrap('./bankIcon/ICBC.png', 210px, 38px);
                }
            }
            .bank-pos-num2 {
                i {
                    .bankLogoWrap('./bankIcon/CCB.png', 210px, 38px);
                }
            }
            .bank-pos-num3 {
                i {
                    .bankLogoWrap('./bankIcon/CMB.png', 174px, 41px);
                }
            }
            .bank-pos-num4 {
                i {
                    .bankLogoWrap('./bankIcon/BCN.png', 144px, 41px);
                }
            }
            .bank-pos-num5 {
                i {
                    .bankLogoWrap('./bankIcon/GDB.png', 214px, 38px);
                }
            }
            .bank-pos-num6 {
                i {
                    .bankLogoWrap('./bankIcon/BOC.png', 197px, 36px);
                }
            }
            .bank-pos-num7 {
                i {
                    .bankLogoWrap('./bankIcon/CEB.png', 196px, 40px);
                }
            }
            .bank-pos-num8 {
                i {
                    .bankLogoWrap('./bankIcon/ABC.png', 200px, 41px);
                }
            }
            .bank-pos-num9 {
                i {
                    .bankLogoWrap('./bankIcon/CMSB.png', 216px, 38px);
                }
            }
            .bank-pos-num10 {
                i {
                    .bankLogoWrap('./bankIcon/CITIC.png', 146px, 40px);
                }
            }
            .bank-pos-num11 {
                i {
                    .bankLogoWrap('./bankIcon/POST.png', 208px, 32px);
                }
            }
            .bank-pos-num12 {
                i {
                    .bankLogoWrap('./bankIcon/POST.png', 208px, 32px);
                }
            }
        }

    }

    .trade-security-code {
        .trade-title {
            margin-bottom: 20px;
        }
        .trade-security-input-wrapper {
            width: 400px;
            margin-bottom: 20px;
            border: 1px solid #d8d8d8;
            border-radius: 4px;
            box-sizing: border-box;
            padding-left: 2px;
            input {
                padding-left: 16px;
                height: 53px;
                width: 360px;
                font-size: 20px;
                color: #a0a0a0;
                line-height: 53px;
                border: none;
            }
        }
        .forget-security-code-tips {
            width: 400px;
            padding-top: 8px;
            text-align: right;
            font-size: 20px;
            color: #a0a0a0;
            cursor: pointer;
        }
    }

    .charge-modal-wrapper {
        width: 720px;
        margin: 0 auto;
        padding: 50px 100px;
        background-color: #fff;
        line-height: 1;
        position: relative;
        .close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 20px;
            height: 20px;
            background-image: url("./cancel.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
        }
        .modal-title {
            font-size: 20px;
            color: #333333;
            margin-bottom: 20px;;
        }
        .modal-tips {
            font-size: 20px;
            color: #333333;
            line-height: 30px;
            margin-bottom: 30px;
        }
        .modal-btn-wrapper {
            .modal-btn {
                height: 52px;
                line-height: 52px;
                font-size: 20px;
                border-radius: 4px;
                text-align: center;
                display: inline-block;
                cursor: pointer;
            }
            .charge-complete {
                width: 144px;
                color: #fff;
                background: #ffba5f;
            }
            .switch-card {
                color: #ffba5f;
                width: 204px;
                margin-left: 30px;
                border: 2px solid #ffba5f;
                vertical-align: top;
                cursor: pointer;
            }
        }
        .service-tip {
            font-size: 16px;
            color: #a0a0a0;
            .service-tel {
                display: inline-block;
                margin-right: 10px;
                font-size: 24px;
                color: #333333;
                font-weight: bold;
            }
        }

    }

</style>

<template>
    <div>
        <v-header></v-header>
        <v-content>
            <div class="charge-wrapper row">
                <div class="charge-account-wrapper">
                    <div class="account-and-logout">
                        <div class="account-img-wrapper">
                            <div class="account-img"></div>
                            <div class="account-tel">{{userId}}</div>
                        </div>
                        <div class="login-to" v-on:click="goToLogin">
                            切换账号？

                        </div>
                    </div>
                    <div class="charge-account-info-wrapper">
                        <p class="account-remains-tag title">账户余额（元）</p>
                        <div class="account-remains num">¥{{accountRemain | formatMoney}}</div>
                        <div class="charge-amount-tag title">充值金额（元）</div>
                        <div class="charge-input-wrapper">
                            <input type="text" class="charge-input" id="J_chargenum" placeholder="请输入充值金额" v-model="chargeMoney"
                                   v-bind:disabled="!chargeMoneyCanEdit">
                                   <input type='text'  style="display:none;" />
                            <span class="money-unit">元</span>
                        </div>
                        <div class="btn confirm-charge" :class="{disabled:orderHasConfirm}" v-on:click="chargeConfirm">充值</div>
                    </div>
                </div>
                <div class="bank-choose-wrapper">
                    <div class="bank-choose-above-wrapper">
                        <div class="choose-title left">
                            <div class="title">选择银行</div>
                            <div class="title-tips">*实际支付限额以用户自行设置的银行限额为准</div>
                        </div>
                        <div class="charge-remain-time right" v-if="orderHasConfirm">
                            <div class="title">剩余支付时间</div>
                            <div class="count-down num">{{chargeCountDown}}</div>
                        </div>
                    </div>
                    <div class="bank-choice-item-wrapper">
                        <template v-for="(item, index) in bankList">
                            <div class="bank-logo-card "
                                 v-bind:class="['bank-pos-num'+ (index+1), {'choose': (index+1) === bankChoose}]"
                                 v-on:click="bankChoose=(index+1)"
                            >
                                <div class="logo-wrapper"><i class="logo"></i></div>
                                <div class="active-icon" v-if="(index+1) === bankChoose"></div>
                            </div>
                        </template>
                    </div>
                    <div class="trade-security-code">
                        <div class="trade-title title">交易密码</div>
                        <div class="trade-security-input-wrapper">
                            <input type="password" name="password" style="display:none;"/>
                            <input type="password" name="password" class="trade-security-code" id="J_trade_password" autocomplete="off" placeholder="请输入交易密码"
                                   v-model="userSecurityCode" maxlength="32">
                        </div>
                        <div class="btn confirm" :class="{disabled:!orderHasConfirm}" v-on:click="confirmOrderWithPasswd">确认</div>
                        <div class="forget-security-code-tips" v-on:click="forgetPasswd">
                            忘记密码？

                        </div>
                    </div>
                </div>
            </div>
        </v-content>
        <v-footer></v-footer>
        <v-modaltip :type="modalType" :show="modalTipShow" v-on:close="modalTipToggle"></v-modaltip>
        <v-maskmodal :showModal="isMaskShow">
            <div class="charge-modal-wrapper" v-if="chargeConfirmShow">
                <p class="modal-title">提示</p>
                <div class="modal-tips">请您在新打开的网上银行页面进行支付，支付完成钱请不要关闭该页面</div>
                <div class="modal-btn-wrapper">
                    <div class="modal-btn charge-complete" @click="chargeComplete">已经充值</div>
                    <div class="modal-btn switch-card" @click="switchBankCard">更换银行支付卡</div>
                </div>
            </div>
            <!--账户冻结-->
            <div class="charge-modal-wrapper" v-if="accountFreezen">
                <div class="close" v-on:click="closeModal('accountFreezen')"></div>
                <p class="modal-title">提示</p>
                <div class="modal-tips">交易密码错误次数达到5次，为了您的账户安全，我们已将您的账户锁定，24小时内将自动解冻，您还可以致电客服</div>
                <div class="service-tip"><span class="service-tel">400-339-993</span>工作日 9:00-21:00  非工作日 10:00-15:00
                </div>
            </div>
            <!--密码错误-->
            <div class="charge-modal-wrapper" v-if="passwdFalse">
                <div class="close" v-on:click="closeModal('passwdFalse')"></div>
                <p class="modal-title">提示</p>
                <div class="modal-tips">{{passwdWrongMsg}}，若忘记密码，请前往App找回密码。</div>
            </div>
        </v-maskmodal>
        <form action="" id="thirdPayForm" name="thirdPayForm" ref="newform" method="post"
              target="_blank" style="display: none;">
            <input v-for="(value, key) in formdata" type="hidden" v-bind:value="value" :name="key"  />
        </form>
    </div>

</template>
<script>
    import Url from 'baseurl';
    import util from 'util';
    import {mapActions} from 'vuex'
    import {USER_SIGNOUT} from 'stores/user'
    import $ from 'jquery'
    import placeholder from '../../util/placeholder.js'
    import pageVisibility   from '../../libs/pageVisibility';
    export default{
        data(){
            return {
                bankList: [
                    {id: "icbcChoice", value: "ICBC"},
                    {id: "ccbChoice", value: "CCB"},
                    {id: "cmbChoice", value: "CMB"},
                    {id: "boc1Choice", value: "BCN"},
                    {id: "cgbChoice", value: "GDB"},
                    {id: "boc2Choice", value: "BOC"},
                    {id: "gdbChoice", value: "CEB"},
                    {id: "abcChoice", value: "ABC"},
                    {id: "cmbcChoice", value: "CMSB"},
                    {id: "eciticChoice", value: "CITIC"},
                    {id: "postChoice", value: "POST"}
                ],
                bankChoose: 1,
                hasRealnameVerify: true,
                accountRemain: '--',
                chargeMoney: '',
                chargeCountDown: '',
                orderNo: '',
                orderHasConfirm: false,
                modalTipShow: false,
                userSecurityCode: '',
                passwdWrongMsg: '',
                isMaskShow: false,
                accountFreezen: false,
                passwdFalse: false,
                chargeConfirmShow: false,
                modalType: '1',
                formdata: [],
                action: '',
                timer: ''

            }
        },
        methods: {
            ...mapActions([USER_SIGNOUT]),
            moneyToCent(money){
                var yuanNum = money + '';
                var r1 = 0;
                //获取小数点位数
                try {
                    r1 = yuanNum.split('.')[1].length
                } catch (e) {
                }
                var numWithoutPoint = yuanNum.replace('.', '');
                if (r1 === 0) {
                    return numWithoutPoint + '00';
                }
                else if (r1 === 1) {
                    return numWithoutPoint + '0'
                } else {
                    return numWithoutPoint;
                }
            },
            chargeConfirm(){
                var that = this;
                if (!this.hasRealnameVerify) {
                    this.modalType = '1'
                    this.modalTipShow = true;
                    return;
                }
                if ((that.chargeMoney + '').length === 0) {
                    util.toast('充值金额不能为空');
                    return;
                }
                ;
                if (parseFloat(that.chargeMoney) == 0) {
                    util.toast('充值金额不能为零');
                    return;
                }
                if (that.orderHasConfirm) return;
                this.$http.post('/order/createRechargeOrder', {
                    money: this.moneyToCent(this.chargeMoney)
                }).then(function (res) {
                    var data = res.data;
                    if (+data.code === 0) {
                        that.orderNo = data.data.orderNo;
                        that.updateOrderStatus();
                    } else{
                    	util.toast(data.msg);
                    }
                });
            },
            startCountDown(totalTime){
                var that = this;
                clearInterval(that.timer);
                that.timer = setInterval(function () {
                    function timeSet(countDown) {
                        var minute = parseInt(countDown / 60);
                        var sec = countDown - 60 * minute;
                        if ((sec + '').length == 1) {
                            sec = '0' + sec;
                        }
                        that.chargeCountDown = '' + minute + ":" + sec;
                    }

                    if (totalTime > 0) {
                        timeSet(--totalTime);
                    } else {
                        clearInterval(that.timer);
                        that.orderHasConfirm = false;
                        that.showOrderState();
                    }
                }, 1000)
            },
            showOrderState(){
                this.$router.push({
                    path: '/chargeResult',
                    query: {
                        orderNo: this.orderNo
                    }
                })
            },
            modalTipToggle(){
                this.modalTipShow = false;
            },
            confirmOrderWithPasswd(){
                var that = this;
                 if(!that.orderHasConfirm){
                	return;
                }
                if($.trim(that.userSecurityCode)==''){
                	util.toast('交易密码不能为空');
                	return;
                }
               
                $.ajax({
                    url: Url.baseurl + 'order/pay/webPay',
                    data: {
                        bankCode: this.bankList[this.bankChoose - 1].value,
                        orderNo: this.orderNo,
                        couponId: '',
                        isUseCashBalance: false,
                        password: this.userSecurityCode
                    },
                    type: 'post',
                    async: false,
                    success: function (_data) {
                        var data = _data;
                        if (+data.code === 55) {
                            //支付成功
                            that.showModal('chargeConfirmShow');
                            that.formdata = data.data;
                            var $thirdPayForm = $("#thirdPayForm");
                            var payAddr = data.data.payAddr;
                            $thirdPayForm.attr("action", payAddr);
                            that.$nextTick(()=>{
                                $thirdPayForm.submit();
                            })
                        }
                        if (+data.code === 27) {
                            //密码错误
                            that.passwdWrongMsg = data.msg;
                            that.showModal('passwdFalse');
                        }
                        if (+data.code === 31) {
                            //账户锁定
                            that.showModal('accountFreezen');
                        }
                    }
                })
            },
            showModal(modalName){
                this[modalName] = true;
                this.isMaskShow = true;
            },
            closeModal(modalName){
                this[modalName] = false;
                this.isMaskShow = false;
            },
            forgetPasswd(){
                this.modalType = 'forgetpassword';
                this.modalTipShow = true;
            },
            updateOrderStatus(){
                this.orderHasConfirm = true;
                var that = this;
                this.$http.post('/order/getRechargeOrderDetail', {
                    orderNo: this.orderNo
                }).then(function (res) {
                    var data = res.data;
                    if (+data.data.status === 1 || +data.data.status === 2) {
                        var expireTime = data.data.expireTime.replace(/-/g, '/');
                        var timeRemain = new Date(expireTime) - data.serverTime;
                        that.startCountDown(parseInt(timeRemain / 1000));
                        that.chargeMoney = (data.data.orderMoney / 100).toFixed(2);
                    } else {
                        that.showOrderState();
                    }
                });
            },
            chargeComplete(){
                this.$router.push({
                    path: '/chargeResult',
                    query: {
                        orderNo: this.orderNo
                    }
                })
            },
            switchBankCard(){
                this.closeModal('chargeConfirmShow');
                this.updateOrderStatus();

            },
            goToLogin(){
                var telephone = this.$store.state.user.telephone;
                this.$http.post('/user/logout').then(function(res){
                })
                this.USER_SIGNOUT();
                this.$router.push({
                    path: '/login'
                })
            }

        },
        watch: {
            chargeMoney: function (newvalue, oldvalue) {
                this.chargeMoney = util.clearNumber(newvalue);
            }
        },
        computed: {
            userId(){
                return this.$store.state.user.telephone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
            },
            chargeMoneyCanEdit(){
                return (this.orderNo + '').length > 0 ? false : true;
            }
        },
        beforeMount(){
            var that = this;
            this.$http.get('/account/getRealInfo?random='+Math.random()).then(function (res) {
                var data = res.data;
                if (+data.code === 0) {
                    that.hasRealnameVerify = data.data.hasBindCard;
                    that.noBindCardShow = !that.hasRealnameVerify;
                    if(!that.hasRealnameVerify){
                    	 that.modalType = '1'
                       that.modalTipShow = true;
                   
                    }
                    
                }
            });
            this.$http.get('/account/info/getCashInfo?random='+Math.random()).then(function (res) {
                var data = res.data;
                if (+data.code === 0) {
                    that.accountRemain = data.data.accountMoney;
                }
            });
            var lastOrderNo = this.$route.query.orderNo || '';
            if (lastOrderNo) {
                this.orderNo = lastOrderNo;
                this.updateOrderStatus();
            }
        }
        ,
        mounted(){

        	placeholder.inserted("#J_chargenum");
        	placeholder.inserted("#J_trade_password");  
        	var that=this;
            var  path=this.$route.path;
            pageVisibility.visibilitychange(function () {
                  if(!pageVisibility.hidden && path=='/charge'&&that.orderNo){
                      that.updateOrderStatus();
                  }
            });
        },
        beforeDestroy(){
             pageVisibility.unbindvisibilitychange();
            this.orderNo='';
        },
         beforeCreate:function(){
		window.scrollTo(0,0);
	    },
        

    };
</script>