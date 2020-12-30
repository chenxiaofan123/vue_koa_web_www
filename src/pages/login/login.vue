<style lang="less" scoped>
	@import "../../less/config";
	.page-content {
		background: #fafafc;
		margin-top: 0;
	}
	
	.footer .tips {
		background: #fafafa;
	}
	
	.login-container {
		padding-top: 80px;
		padding-bottom: 40px;
		.login-img {
			width: 186px;
			height: 60px;
			background: url('./gbanker_logo.png') center center no-repeat;
			margin: 0 auto;
			margin-bottom: 45px;
			cursor: pointer;
		}
		.login-wrap {
			padding: 80px 40px;
			border: 1px solid #d8d8d8;
			background: #fff;
			border-radius: 4px;
			width: 448px;
			box-sizing: border-box;
			margin: 0 auto;
		}
		.tab {
			li {
				.fl();
				.pr();
				font-size: 20px;
				color: #a0a0a0;
				padding-right: 20px;
				border-right: 1px solid #a0a0a0;
				cursor: pointer;
				i {
					display: none;
					width: 50%;
					margin: 0 auto;
					background: #333;
					height: 2px;
					position: relative;
					top: 6px;
				}
			}
			li:not(:first-child) {
				padding-left: 20px;
			}
			li:last-child {
				border: 0;
			}
			li.active {
				color: #333333;
				i {
					display: block;
				}
			}
		}
	}
	
	.login-content {
		padding-top: 20px;
	}
	
	.common-input {
		display: block;
		width: 100%;
		height: 52px;
		line-height: 52px;
		padding-left: 16px;
		box-sizing: border-box;
		font-size: 20px;
		color: #a0a0a0;
		background: #fafafc;
		border: 1px solid #d8d8d8;
		border-radius: 4px;
		margin-top: 20px;
		&.yzm {
			.fl();
			width: 210px;
		}
		&.focus {
			border: 1px solid #ffba5f;
			background: #fff;
		}
	}
	
	.login-btn {
		display: block;
		border: 0;
		outline: 0;
		width: 100%;
		margin-top: 56px;
		height: 52px;
		line-height: 52px;
		color: #fff;
		text-align: center;
		background: #ffba5f;
		border-radius: 4px;
		font-size: 20px;
	}
	
	.forgetpassword {
		margin-top: 10px;
		text-align: right;
		font-size: 16px;
		color: #a0a0a0;
		cursor: pointer;
	}
	
	.yzmcode-btn {
		.fr();
		height: 52px;
		line-height: 52px;
		text-align: center;
		font-size: 20px;
		background: #ffba5f;
		color: #fff;
		padding: 0 20px;
		margin-top: 20px;
		cursor: pointer;
		&.disabled {
			color: #a0a0a0;
			background: #e6e6e6;
			cursor: default;
		}
		border-radius:4px;
	}
	
	.yzm-text-wrap {
		/*验证码文字提示区域*/
		margin-top: 10px;
		p {
			font-size: 16px;
			color: #333333;
			span {
				color: #ffa210;
				cursor: pointer;
			}
		}
	}
</style>
<template>
	<div class="login-page">
		<v-content>
			<div class="login-container">
				<div class="login-img" @click="toindex"></div>
				<div class="login-wrap">
					<div class="tab">
						<ul class="clearfix">
							<li :class="{ active:tabshow}" @click="tablogin(true)">密码登录<i></i></li>
							<li :class="{ active:!tabshow}" @click="tablogin(false)">验证码登录<i></i></li>
						</ul>
					</div>
					<div class="login-content">
						<div class="login-content-password" v-show="tabshow">
							<input type="text" id="J_telephone" @keyup='telephonekeyup' :disabled="yzmtelephonestatus" @focus="inputfocus" @blur="inputblur" maxlength="11" v-model="telephone" class="common-input" placeholder="请输入手机号" />
							<input type="password" name="password" style="display:none;" />
							<input type="password" name="password" id="J_password" v-model="password" @focus="inputfocus" @blur="inputblur" @keyup.enter="loginbypassword" autocomplete='off' class="common-input" placeholder="请输入密码" />
							<button type="button" class="login-btn" @click="loginbypassword">登录</button>
							<p class="forgetpassword" @click="toggletip">忘记密码?</p>
						</div>
						<div class="login-content-yzm" v-show="!tabshow">
							<input type="text" id="J_telephone2" @keyup='telephonekeyup' :disabled="yzmtelephonestatus" @focus="inputfocus" @blur="inputblur" maxlength="11" v-model="telephone" class="common-input" placeholder="请输入手机号" />
							<div class="clearfix">
								<input type="text" id="J_yzm" v-model="yzm" @focus="inputfocus"  @blur="inputblur" class="common-input yzm" placeholder="请输入验证码" />
								<div class="yzmcode-btn" @click="getsmsyzm(1)" :class="{disabled:yzmstatus}">{{countdown}}</div>
							</div>
							<div class="yzm-text-wrap">
								<p v-show="!yzmyystatus" class="yzm-tip">收不到短信验证码? 使用<span @click="getsmsyzm(2)">语音验证码</span></p>
								<p v-show="yzmyystatus" class="">请关注来电{{countdownyzm}}</p>
							</div>

							<button type="button" class="login-btn" @click="loginbyyzm">登录</button>
						</div>
					</div>
				</div>
			</div>
		</v-content>
		<v-footer tipscolor="#fafafa"></v-footer>
		<v-modaltip :show="forgetpasswordtip" type="forgetpassword" @close="toggletip"></v-modaltip>
	</div>
</template>
<script>
	import util from 'util';
	import { mapActions } from 'vuex'
	import { USER_SIGNIN } from 'stores/user'
	import placeholder from '../../util/placeholder.js'
	export default {
		data() {
			return {
				tabshow: true,
				telephone: '',
				password: '',
				yzm: '',
				yzmstatus: true,
				yzmyystatus: false,
				countdown: '获取验证码',
				countdownyzm: '', // 语音验证码
				forgetpasswordtip: false,
				showyzmbtn: false
			}
		},
		 beforeCreate:function(){
		window.scrollTo(0,0);
	    },
		mounted() {

			// ie9 placehoder
			placeholder.inserted("#J_telephone");
			placeholder.inserted("#J_telephone2");
			placeholder.inserted("#J_password");
			placeholder.inserted("#J_yzm");           
             //this.tablogin(true);
		},
		beforeDestroy() {
			
		},
		watch:{
			telephone:function(value){
				if(value&&value.length==11){
					this.yzmstatus=false;
					//this.yzmyystatus=false;
				} else{
					this.yzmstatus=true;
					//this.yzmyystatus=true;
				}
			}
		},
		computed:{
		  yzmtelephonestatus:function(){
		  	 return (this.yzmstatus||this.yzmyystatus)&&(this.countdown!='获取验证码'||this.countdownyzm!='');
		  }
		},
		methods: {
			...mapActions([USER_SIGNIN]),
			countDown(status) {
				var num = 60;
				var that = this;
				var flag = status == 1 ? true : false;
				if(flag) {
					that.yzmstatus = true;
				} else {
					that.yzmyystatus = true;
				}

				function count() {
					if(flag) {
						that.countdown = num + 's';
					} else {
						that.countdownyzm = num + 's';
					}

					num = parseInt(num) - 1;
					if(num < 0) {
						if(flag) {
							that.yzmstatus = false;
							that.countdown = '获取验证码'
						} else {
							that.yzmyystatus = false;
						}

					} else {
						setTimeout(function() {
							count();
						}, 1000)
					}
				}
				count();
			},
			loginbypassword() {
				var that = this;
				if(!util.valid.checkTelephone(this.telephone)) {
					return false;
				}
				if(!util.valid.checkPassword(this.password)) {
					return false;
				}

				this.$http.post('/user/updateUserLogin', { telephone: this.telephone, password: this.password }).then(function(res) {
					that.loginSuccess(res);
				})
			},
			loginSuccess(res) {
				var data = res.data;
				if(data.code === '0000') {
					this.USER_SIGNIN({
						telephone: this.telephone
					})

					var path = this.$router.currentRoute.query.pre
					if(path) {
						router.push('/' + path);
					} else {
						router.push('/');
					}

				} else {
					if(data.msg) {
						util.toast(data.msg, 5000);
					} else {
						console.log("登录出现问题,没有返回msg");
					}
				}
			},
			telephonekeyup() {
				var reg = /\D/g;
				if(reg.test(this.telephone) == true) {
					this.telephone = this.telephone.replace(/\D/g, "");
				}
				if(this.telephone.length > 11) {
					this.telephone = this.telephone.substring(0, 11);
				}


			},
			inputfocus(event) {
				event.target.className += ' focus';

			},
			inputblur(event) {
				var classname = event.target.className;
				classname = classname.replace(/\sfocus/g, '');
				event.target.className = classname;
			},
			getsmsyzm(type) {
				var type = type || 1;
				var that = this;
				if(type==1){
					if(that.yzmstatus) {
					return;
				  }
				} 				
				if(!util.valid.checkTelephone(this.telephone)) {
					return false;
				}
				
				//首先判断
				this.$http.post('/user/code', { telephone: this.telephone, authCodeType: type }).then(function(res) {
					var data = res.data;
					if(data.code === '0000') {
						that.countDown(type);
					} else {
						util.toast(data.msg);
					}
				})
			},
			loginbyyzm() {
				var that = this;
				if(!util.valid.checkTelephone(this.telephone)) {
					return false;
				}
				if(!util.valid.checkYzm(this.yzm)) {
					return false;
				}
				this.$http.post('/user/loginByValid', { telephone: this.telephone, authCode: this.yzm }).then(function(res) {
					that.loginSuccess(res);
				})
			},
			logout() {
				this.$http.post('/user/logout').then(function(res) {
					if(res.data.code === '0000') {
						util.toast('退出成功');
					}
				})
			},
			toggletip() {
				this.forgetpasswordtip = !this.forgetpasswordtip;
			},
			toindex() {
				router.push('/');
			},
			tablogin(value){
				this.tabshow=value;
				//this.telephone='';
				//this.password='';
				
			}
		}
	}
</script>