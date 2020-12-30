<style lang="less" scoped>
	@import "../../less/config";
	.result-wrapper {
		padding: 200px 0px;
		display: table;
		&>div {
			display: table-cell;
			vertical-align: middle;
		}
		.charge-result-wrapper {
			width: 616px;
			padding-left: 200px;
			box-sizing: border-box;
			.status-tag-img {
				height: 100px;
				width: 100px;
				display: table-cell;
				vertical-align: middle;
				background-repeat: no-repeat;
				background-size: 100%;
				&.timeOut {
					background-image: url("./unsuccess.png");
				}
				&.unsuccess {
					background-image: url("./error.png");
				}
				&.success {
					background-image: url("./success.png");
				}
			}
			.status-words-wrapper {
				display: table-cell;
				vertical-align: middle;
				padding-left: 40px;
				.status-title {
					font-size: 36px;
					font-weight: bold;
					color: #333333;
					padding-bottom: 20px;
					.fontSpec;
				}
				.status-words {
					font-size: 16px;
					color: #333333;
					span:hover {
						color: #ffba5f;
						cursor: pointer;
					}
				}
				.success {
					font-size: 16px;
					color: #a0a0a0;
				}
			}
		}
		.download-pos-wrapper {
			width: 240px;
			.qrcode-img {
				width: 240px;
				height: 240px;
				background-image: url("./qrcode.png");
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
			.download-tips-words {
				width: 240px;
				padding-top: 20px;
				font-size: 20px;
				color: #333333;
				text-align: center;
			}
		}
	}
</style>

<template>
	<div>
		<v-header></v-header>
		<v-content>
			<div class="result-wrapper row">
				<div class="charge-result-wrapper" v-show="orderStatus==13">
					<div class="status-tag-img timeOut"></div>
					<div class="status-words-wrapper">
						<div class="status-title">订单已超时，请重新下单</div>
						<div class="status-words" v-on:click="reCharge"> <span>重新下单</span> </div>
					</div>
				</div>
				<div class="charge-result-wrapper" v-show="orderStatus ==2">
					<div class="status-tag-img unsuccess"></div>
					<div class="status-words-wrapper">
						<div class="status-title">订单尚未支付成功！</div>
						<div class="status-words"><span v-on:click="updateOrderStatus">刷新状态</span> <span v-on:click="continuePay">继续支付</span></div>
					</div>
				</div>
				<div class="charge-result-wrapper" v-show="orderStatus ==11">
					<div class="status-tag-img success"></div>
					<div class="status-words-wrapper">
						<div class="status-title">你已成功充值！ <span v-if="orderNo.length>0">¥{{chargeMoney|formatMoney}}</span> <span v-if="!orderNo">{{countDown}}秒后关闭</span></div>
						<div class="status-words success">账户余额{{accountRemain|formatMoney}}元，请登录黄金钱包App查看详情。</div>
					</div>
				</div>
				<div class="download-pos-wrapper">
					<div class="qrcode-img"></div>
					<div class="download-tips-words">扫描二维码下载App</div>
				</div>
			</div>
		</v-content>
		<v-footer></v-footer>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                orderStatus: 11,
                orderNo: '',
                chargeMoney: 0,
                remainMoney: 0,
                accountRemain: '--',
                countDown: 5
            }
        },
        methods: {
            updateOrderStatus() {
                var that = this;
                this.$http.post('/order/getRechargeOrderDetail', {
                    orderNo: this.orderNo
                }).then(function(res) {
                    var data = res.data.data;
                    if(+data.status === 13) {
                        that.orderStatus = 13
                        return;
                    }
                    if(+data.status === 2) {
                        that.orderStatus = 2;
                        return;
                    }
                    if(+data.status === 11) {
                        that.orderStatus = 11
                        that.chargeMoney = data.orderMoney

                    }
                });
                this.$http.get('/account/info/getCashInfo?random='+Math.random()).then(function(res) {
                    var data = res.data;
                    if(+data.code === 0) {
                        that.accountRemain = data.data.accountMoney;
                    }
                });

            },
            reCharge() {
                this.$router.push({ path: '/charge' })
            },
            continuePay() {
                this.$router.push({
                    path: '/charge',
                    query: {
                        orderNo: this.orderNo
                    }
                })
            }
        },
        beforeMount() {
            this.orderNo = this.$route.query.orderNo || '';
            this.updateOrderStatus();
            var that = this;
            if(this.orderNo.length === 0) {
                var timer = setInterval(function() {
                    var countDown = that.countDown;
                    if(--countDown < 0) {
                        window.open('', '_self', '').close();
                        clearInterval(timer);
                    }
                    that.countDown = countDown;
                }, 1000);
            }
        },
        mounted() {


        }
    }
</script>