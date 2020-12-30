<style lang="less" scoped>
	@import "../../less/config";
	
	.line1 { .mt(120); height:1px; background: #D8D8D8;}
	.head-bg {
		margin-top: -80px;
		width: 100%;
		height: 740px;
		background: url('./headerbg.jpg') center center no-repeat;
		.head-title {
			display:inline-block;
			width:800px;
			.pr();
			top: 50%;
			left: 50%;
			text-align: center;
			color: #fff;
			transform: translate(-50%, -50%);
			p:first-child {
				font-size: 60px;
			}
			p:last-child {
				.fontLight;
				font-size: 32px;
				margin-top: 20px;
				letter-spacing: 1px;
			}
		}
	}
	
	.goldinfo {
		background: #fff;
		border-radius: 4px;
		padding-top: 40px;
		padding-bottom: 40px;
		box-shadow: 0 5px 10px 0 rgba(51, 51, 51, 0.10);
		transform: translateY(-50%);
		li {
			.fl();
			text-align: center;
			p:first-child {
				font-size: 60px;
				color: #ffba5f;
				.fontSpec;
				span {
					font-size: 12px;
				}
			}
			p:last-child {
				padding-top:8px;
				font-size: 20px;
				color: #333333;
			}
			&:first-child {
				width: 610px;
				border-right:1px solid #d8d8d8;
			}
			/*&:nth-child(2) {
				width: 1px;
				div {
					height: 80px;
					background: #d8d8d8;
				}
			}*/
			&:last-child {
				width: 609px;
			}
		}
	}
	/*首页公告*/
	
	.notice {
		.fontLight;
		padding-bottom: 20px;
		border-bottom: 1px solid #d8d8d8;
		span {
			.fl();
			font-size: 20px;
			color: #a0a0a0;
			a {
				color: #a0a0a0;
			}
			a:hover {
				color: @hovercolor;
			}
			&.line {
				background: #e6e6e6;
				width: 2px;
				height: 20px;
				margin: 0 10px;
			}
			&:last-child {
				.fr();
			}
		}
	}
	
	.title1 {
		margin-top: 120px;
		text-align: center;
		font-size: 42px;
		color: #333333;
		.fontLight;
		span {
			display: inline-block;
			border-bottom: 2px solid #333333;
			padding-bottom: 10px;
		}
	}
	
	.savegold {
		margin-top: 88px;
		li {
			.fl();
			text-align: center;
			width: 200px;
			margin-right: 140px;
			&:last-child {
				margin-right: 0;
			}
			img {
				display: block;
				width: 60px;
				height: 60px;
				margin: 0 auto;
			}
			p {
				font-size: 20px;
				color: #333333;
				margin-top: 20px;
			}
		}
	}
	
	.btn-wrap {
		text-align: center;
	}
	
	.btn {
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
		.commbtn();
		display: inline-block;
		color: #fff;
		font-size: 20px;
		background: #ffba5f;
		cursor: pointer;
		&.btn1 {
			color: #A0A0A0;
			background: #fff;
			border: 1px solid #A0A0A0;
            border-radius: 4px;
		}
		&.btn2 {
			color: #333333;
			background: transparent;
			border: 1px solid #333333;
            border-radius: 4px;
		}
	}
	
	.productinfo {
		.mt(90);
		li {
			.fl();
			width: 33%;
			height: 80px;
			text-align: center;
			border-right: 1px solid @bordercolor;
			.pr();
			.cornerTagImgUrl {
				width: 32px;
				height: 20px;
				display:inline-block;
				.pr();
				top:2px;
			}
			.product-name{
				color:#333;
				font-size:20px;
				text-align: center;
				margin-bottom:10px;
				.mt(-30);
			}
			.document{
				font-size: 16px;
color: #A0A0A0;
text-align: center;
margin-bottom:20px;
			}
			&:last-child {
				border-right: 0;
			}
			p:first-of-type {
				font-size: 80px;
				color: #ffba5f;
                 .fontSpec;
				span {
					font-size: 20px;
				}
				.product-img {
					display: block;
					width: 180px;
					height: 80px;
					margin: 0 auto;
				}
			}
			p:last-child {
				font-size: 14px;
                color: #A0A0A0;
                text-align: center;
			}
		}
	}
	
	.safe-wrap {
		.mt(200);
		width: 100%;
		height: 634px;
		background: url('./safebg.png') center center no-repeat;
		.list {
			text-align: center;
			.mt(90);
			p {
				.fontLight;
				font-size: 20px;
				color: #333333;
				.mb(20);
			}
		}
	}
	
	.media-ul {
		.mt(100);
		li {
			padding-bottom: 50px;
			img {
				width: 160px;
				height: 80px;
				margin-right: 50px;
				.fl();
				border: 1px solid #e6e6e6;
				border-radius: 4px;
			}
			div {
				overflow: hidden;
				p {
					
					width: 600px;
				}
				p:first-child {
					font-size: 20px;
					color: #333333;
					.nobreak();
				}
				p:last-child {
					.mt(18);
					font-size: 16px;
					color: #a0a0a0;
					width:1000px;
					line-height: 1.5;
					.fontLight;
				}
			}
		}
	}
	
	.video-wrap {
		.mt(120);
		background: #ffffff;
		box-shadow: 0 0 10px 0 rgba(51, 51, 51, 0.10);
		border-radius: 4px;
		.left {
			.fl();
			width: 419px;
			height: 530px;
			.pr();
			.video-text {
				.pa();
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			    width:250px;
				.video-title {
					font-size: 20px;
					color: #333333;
					margin-bottom: 40px;
					margin-left: -30px;
					&:before {
						content: '';
						display: inline-block;
						background: #ffba5f;
						width: 10px;
						height: 20px;
						margin-right: 20px;
						.pr();
						top: 3px;
					}
				}
	            .sectitle{
					position:relative;
					span:first-child{
						display: inline-block;
						width:40px;
						height:1px;
						border-top:1px solid #333;
						position:absolute;
						top:50%;
						left:0;
					}
					span:last-child{
						display: inline-block;
						margin-left:40px;
					}
				}
				p {
					font-size: 16px;
					color: #333333;
					margin-bottom: 10px;
				}
			}
		}
		.right {
			.fr();
			width: 800px;
			height: 530px;
		}
	}	
	.partner {
		height: 188px;
		margin-top: 200px;
		background: url('./partner.png') center center no-repeat;
		margin-bottom: 140px;
	}
</style>
<template>
	<div class="home-wrap">
		<v-header :activeindex="1"></v-header>
		<v-content>
			<div class="head-bg">
				<div class="head-title">
					<p>买黄金，上黄金钱包</p>
					<p>银行系资本&nbsp;&nbsp;软银中国投资企业</p>
				</div>
			</div>
			<div class="row home-content">
				<div class="goldinfo">
					<ul class="clearfix">
						<li>
							<p>{{info.goldweight}}<span>吨</span></p>
							<p>累计为用户管理黄金</p>
						</li>
						<li>
							<p>{{info.registernum}}<span>人</span></p>
							<p>注册用户数</p>
						</li>
					</ul>
				</div>
				<div class="notice clearfix">
					<span>公告</span>
					<span class="line"></span>
					<span><router-link :to="'noticedetails/'+notice.id">{{notice.content}}</router-link></span>
					<span>
						<router-link to="/noticelist"><span>更多 ></span></router-link>
					</span>
				</div>
				<div class="block1">
					<div class="title1"><span>颠覆</span>你的黄金投资方式</div>
					<ul class="clearfix savegold">
						<li>
							<img src="./savegold-1.png" alt="" />
							<p>黄金保值还生息</p>
						</li>
						<li>
							<img src="./savegold-2.png" alt="" />
							<p>买金便宜门槛低</p>
						</li>
						<li>
							<img src="./savegold-3.png" alt="" />
							<p>闲置黄金能赚钱</p>
						</li>
						<li>
							<img src="./savegold-4.png" alt="" />
							<p>全国可兑金条金饰</p>
						</li>
					</ul>
					<!--<div class="btn-wrap">
						<router-link class="btn" to="/deposit">了解存提金教程</router-link>
					</div>-->
				</div>
				<div class="row line1"></div>
				<div class="block2">
					<div class="title1">丰富<span>多样</span>的投资组合</div>
					<ul class="clearfix productinfo">
						<li v-for="item in promotionlist" :class="{financing:item.totalSaleUnitSign==2}">
							
							<div class="product-name">
								<img v-show="item.cornerTagImgUrl" :src="item.cornerTagImgUrl" class="cornerTagImgUrl" alt="" />
								<span>{{item.name}}</span>
							</div>
							<div class="document">
								 {{item.document}}
							</div>
							<p v-if="item.rateType==1">
								{{item.rateText}}
							</p>
							<p v-if="item.rateType==2">
								<img class="product-img" :src="item.rateUrl" />
							</p>
							<p v-if="item.rateType==3">
								{{item.rate | formatMoney}}<span>%</span>
							</p>
							<p v-if="item.rateType==4">
								{{item.rateText}}<span>{{item.unit}}</span>
							</p>
							<p>{{item.specialWord}}</p>
							
						</li>
					</ul>
					<div class="btn-wrap">
						<a class="btn" style="margin-top:140px;" @click="showdownload">下载App立即投资</a>
					</div>
				</div>
			</div>
			<div class="safe-wrap">
				<div class="title1" style="margin-top:0; padding-top:100px;">黄金钱包<span>安全</span>可靠</div>
				<div class="list">
					<p>全明星银行系资本入股</p>
					<p>软银中国领投的互联网黄金平台</p>
					<p>中国黄金协会常务理事单位</p>
					<p>中国珠宝玉石首饰行业协会会员单位</p>
				</div>
				<div class="btn-wrap">
					<router-link class="btn btn2" to="/insurance">了解更多</router-link>
				</div>
			</div>
			<div class="row">
				<div class="title1" style="margin-top:200px;">媒体报道</div>
				<ul class="media-ul" id="media-ul-wrap">
					<li class="clearfix" v-for="item in mediadata">
						<img :src="item.webImgUrl" alt="">
						<div>
							<p>
								<a :href="item.sourceUrl" target="_blank">{{item.title}}</a>
							</p>
							<p style="height:50px" class="media-summary">{{item.summary}}</p>
						</div>
					</li>
				</ul>
				<div class="btn-wrap">
					<router-link class=" btn btn1" style="margin-top:10px;" to="/medialist">查看更多报道</router-link>
				</div>
				<div class="video-wrap clearfix">
					<div class="left">
						<div class="video-text">
							<template v-for="(item, index) in slidertext" v-if="index==videoindex">
								<div class="video-title">{{item.title}}</div>
								<p>{{item.content}}</p>
								<p class="sectitle"><span></span><span>{{item.sectitle}}</span></p>
							</template>

						</div>
					</div>
					<div class="right">
						<v-slider :iconflag="iconflag" :slides="sliderdata" @slidechange="videochange"></v-slider>
					</div>
				</div>
				<div class="partner"></div>
			</div>
		</v-content>
		<v-footer></v-footer>
		<v-modaltip :show="download" type="download" @close="download=false" ></v-modaltip>
	</div>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	import util from 'util'
	import shave from 'shave'

	export default {
		data() {
			return {
				download:false,
				info: {
					goldweight: 0,
					registernum: 0
				},
				iconflag: true,
				notice: {
					id: '',
					content: ''
				},
				mediadata: '',
				videoindex: 0,
				slidertext: [{
						title: 'CCTV专访',
						content: '黄金钱包董事长杨㟀罡',
						sectitle: '解密黄金生息之道'
					},
					{
						title: '北京电视台',
						content: '北京新发现',
						sectitle: '“闲置黄金”手机中赚利息'
					},
					{
						title: '黄金钱包',
						content: '一分钟教你赚钱',
						sectitle: '《我的黄金能生息》'
					},
					{
						title: '凤凰视频特邀',
						content: '黄金钱包首席研究员肖磊',
						sectitle: '前瞻黄金趋势'
					}
				],
				sliderdata: [
						{
							src: require('./vedio-4.png'),
							href: '/video/2'
						},
						{
							src: require('./vedio-1.png'),
							href: '/video/1'
						},
						{
							src: require('./vedio-3.png'),
							href: '/video/3'
						},
						{
							src: require('./vedio-2.png'),
							href: '/video/4'
						}
						],
					promotionlist: []
				}
			},
			 beforeCreate:function(){
		window.scrollTo(0,0);
	    },
			watch: {
				},
				computed: {

				},
				methods: {
					videochange(index) {
						this.videoindex = index;
					},
					showdownload(){
						this.download=true;
					}
				},
				beforeMount() {

				},
				mounted() {
					var that = this;
					//获取公告信息
					this.$http.post('info/getNoticeInfoList', {
						start: 0,
						size: 1
					}).then(function(res) {
						var data = res.data;
						if(data.code === '0000') {
							var noticeInfoList = data.data.noticeInfoList;
							if(noticeInfoList) {
								var item = noticeInfoList[0];
								that.notice = {
									id: item.id,
									content: item.title + ' ' + item.date.substr(0,10)
								}
							}
						} else {
							util.toast(data.msg);
						}
					})
					
					// 黄金存管量 及 用户数量
					this.$http.post('price/marketprice').then(function(res){						
						var data=res.data;
						if(data.code==='0000'){
							var weight=(data.data.totalGoldWeight/1000000000)+'';
							var arr=weight.split('.');
							var formatweight=arr[0]+'.' + arr[1].substring(0,2);
							
							that.info.goldweight=formatweight;
							that.info.registernum=data.data.totalRegisterUser;
						}
						
					})

					//三个置顶产品信息

					this.$http.post('/info/getDepositPromotionList').then(function(res) {
						var data = res.data;
						if(data.code === '0000') {
							that.promotionlist = data.data.depositPromotionList;
						}
					})

					//获取媒体列表
					this.$http.post('/info/getMediaInfoList', {
						start: 0,
						size: 3
					}).then(function(res) {
						var data = res.data;
						if(data.code === '0000') {
							that.mediadata = data.data.mediaInfoList;
							that.$nextTick(function(){
								shave('#media-ul-wrap .media-summary',50,{spaces:false});
							})
						}
					})

				}

		}
</script>