<style lang="less" scoped>
	@import "../../less/config";
	.title {
		text-align: center;
		font-size: 42px;
		color: #333333;
		padding-top: 100px;
	}
	
	.sectitle {
		font-size: 20px;
		color: #333333;
		text-align: center;
		.mt(20);
		line-height: 1.5;
	}
	
	.title1 {
		margin-top: 100px;
		span {
			display: inline-block;
		}
		span:first-child {
			font-size: 20px;
			color: #333333;
		}
		span:nth-child(2) {
			width: 1px;
			height: 20px;
			.ml(20);
			.mr(20);
			background: #e6e6e6;
		}
		span:last-child {
			font-size: 20px;
			a{
				color: #ffba5f;
			}
		}
	}
	
	.des {
		font-size: 16px;
		color: #333333;
		.mt(20);
		p {
			.mb(10);
			line-height: 1.5;
			
		}
	}
	
	.deposit-ul {
		.mt(50);
		li {
			.fl();
			width: 160px;
			text-align: center;
			.mr(105);
			&:last-child{
				.mr(0);
			}
			img {
				display: block;
				width: 60px;
				height: 60px;
				margin: 0 auto;
				margin-bottom: 20px;
			}
			div {
				font-size: 14px;
				color: #a0a0a0;
				line-height: 1.5;
			}
		}
	}
	.line { height: 0; border-top:1px solid @bordercolor;}
	.store-ul{
		.mt(120);
		
		li{
			.fl();
			cursor: pointer;
			padding:20px;
			font-size:20px;
            color:#333333;
            margin-right:60px;
            margin-bottom:-1px;
            &:last-child{
            	.mr(0);
            }
          &.active{
          	color:#ffba5f;
          	border-bottom:2px solid #ffba5f;
          	padding-bottom:18px;
          }
		}
	}
	.icon-get{
		display:inline-block;
		width:16px;
		height:16px;
		background:url('./icon-get.png') center center no-repeat;
		margin-left:12px;
		.pr();
		top:2px;
	}
	.icon-save{
		display:inline-block;
		width:16px;
		height:16px;
		background:url('./icon-save.png') center center no-repeat;
		margin-left:12px;
		.pr();
		top:2px;
	}
	.storelist-ul{
		.clearfix();
		margin-top:50px;
		margin-right:-100px;
		li{
			.fl();
			padding-bottom:50px;
			margin-right:100px;
			width:340px;
			&:last-child { margin-right:0;}
			p:first-child{
				padding-bottom:10px;
			span{
				font-size:16px;
                color:#333333;
                padding-right:8px;
			 }	
			}
			p:nth-child(2){
				font-size:14px;
                color:#a0a0a0;
                margin-bottom:10px;
                .nobreak();
			}
			p:last-child{
				font-size:14px;
                color:#a0a0a0;
			}
		}
	}
</style>
<template>
	<div>
		<v-header></v-header>
		<v-content >
			<div class="row">
			<div class="title">
				存提金教程
			</div>
			<div class="sectitle">
				黄金钱包已开通50多家合作门店，实物黄金，随时存取
			</div>
			<div class="block1">
				<div class="title1">
					<span>门店存金</span><span></span><span><router-link to="/reserverule">查看存金规则</router-link></span>
				</div>
				<div class="des">
					<p>存金条金饰，是黄金钱包和线下实体金店合作的实物黄金存管业务。将原有金条或金饰存入黄金钱包账户中，所存黄金可按天获得利息，存得越多利息越多，最高可获年化收益6%。</p>
				</div>
				<ul class="deposit-ul clearfix">
					<li>
						<img src="./deposit-save-1.png" alt="" />
						<div>
							前往黄金钱包合作金店（携带待存黄金、本人身份证与智能手机一台）
						</div>
					</li>
					<li>
						<img src="./deposit-save-2.png" alt="" />
						<div>
							等待店员检测黄金，黄金合格后生成订单
						</div>
					</li>
					<li>
						<img src="./deposit-save-3.png" alt="" />
						<div>
							用户在App上确认该订单（所存黄金可能会有部分损耗，具体见存金规则）
						</div>
					</li>
					<li>
						<img src="./deposit-save-4.png" alt="" />
						<div>
							店员确认所存黄金订单无误，并将所存黄金存入金店
						</div>
					</li>
					<li>
						<img src="./deposit-save-5.png" alt="" />
						<div>
							存金完成（用户所存黄金可在黄金钱包App中进行查看）
						</div>
					</li>
				</ul>
			</div>
			<div>
				<div class="title1">
					<span>门店提金</span>
				</div>
				<div class="des">
					<p>提金条金饰，是黄金钱包和线下实体金店合作的实物黄金存提业务。黄金钱包的用户在去金店提金前，有两点需注意：</p>
					<p>1. 确保自己已通过黄金钱包的提金认证（需通过App进行提金认证）；</p>
					<p>2.自己黄金钱包的账户里有足够的流动金可抵扣所需提取的实物黄金。</p>
					<p>确认无误后，只要在金店里选择自己喜欢的金条或金饰，支付店里对应的手续费就即刻可提。</p>
				</div>
				<ul class="deposit-ul clearfix">
					<li>
						<img src="./deposit-save-1.png" alt="" />
						<div>
							前往黄金钱包合作金店（携带本人身份证与智能手机一台）
						</div>
					</li>
					<li>
						<img src="./deposit-get-2.png" alt="" />
						<div>
							在金店挑选黄金（确保账户内的流动金足够抵扣）
						</div>
					</li>
					<li>
						<img src="./deposit-get-3.png" alt="" />
						<div>
							等待店员生成订单
						</div>
					</li>
					<li>
						<img src="./deposit-save-4.png" alt="" />
						<div>
							用户确认无误后，抵扣相应克重
						</div>
					</li>
					<li>
						<img src="./deposit-save-5.png" alt="" />
						<div>
							支付所提黄金相关手续费，黄金到手
						</div>
					</li>
				</ul>
			</div>
			</div>
			<div>
				<ul class="clearfix row store-ul" ref="tabul">
					<li class="active" @click="tab(0)">
						全部
					</li>
					<li   v-for="(item,index) in listdata" @click="tab(index+1)" >
						{{item.region}}
					</li>	
				</ul>
				<div class="line"></div>
			</div>
			<div class="row">
				<ul class="storelist-ul">
					<li v-for="item in activedata">
						<p>
							<span>{{item.name}}</span>  <i class="icon-save" v-if="item.openBusiness==1||item.openBusiness==2"></i><i class="icon-get" v-if="item.openBusiness==1||item.openBusiness==3"></i>
						</p>
						<p>{{item.address}}</p>
						<p>电话：{{item.storePhone}}</p>
					</li>
				</ul>
				<v-pagination :size="size" :count="count" :callback="page" :current='current'></v-pagination>
			</div>
			<div class="row">
				<div class="title" style="margin-top:100px;">
				手机提金
			</div>
			<div class="sectitle" style="margin-bottom:140px;">
				线上提金，是黄金钱包App的特色功能，利用账户中的流动金抵扣所提取的实物黄金克重，并支付相应的物流保险、工费、运费即可兑换实物黄金，黄金钱包选择顺丰保价快递保证物品安全送达。
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
				alldata:[],
				storedata:[],
				listdata:[],
				activeindex:0,
				activedata:[],
				count:0,
				size:9,
				current:1
			}
		},
		 beforeCreate:function(){
		window.scrollTo(0,0);
	    },
		created(){
			 var that = this;
            this.$http.post('/info/getStoreInfoList').then(function(res) {
                    var data=res.data;
                    if(data.code==='0000'){
                    	var alldata=[];
                    	var itemdata=[];
                    	data.data.regionList.forEach(function(item){
                    		var index=item.region.indexOf('地');
                    		item.region=item.region.substring(0,index);
                    		alldata=alldata.concat(item.storeList);
                    		itemdata.push(item.storeList);
                    	})
                    	that.alldata=alldata;
                    	that.storedata=itemdata;
                    	that.listdata=data.data.regionList;
                    	that.activedata=alldata.slice(0,that.size);
                    	that.count=alldata.length;
                    }
                })
		},
		methods:{
			tab(index){
			  var domul=this.$refs.tabul;
             var li= domul.querySelectorAll('li');
             [].slice.call(li).forEach(function(item){
             	item.className='';
             })
             li.className=' ';
			  li[index].className='active';	
			  this.activeindex=index;
			  if(index==0){
			  	this.activedata=this.alldata.slice(0,this.size);
			  	this.count=this.alldata.length;
			  }else{
			  	index=index-1;
			  	this.activedata=this.storedata[index].slice(0,this.size);
			  	this.count=this.storedata[index].length;
			  }
			},
			page(p,s){
				if(this.activeindex==0){
				
			  	this.activedata=this.alldata.slice(s,this.size+s);			  	
			  }else{
			   let 	index=this.activeindex-1;
			  	this.activedata=this.storedata[index].slice(s,this.size+s);
			  }
			  this.current=p;
			}
		}
	}
</script>