<style lang="less" scoped>
@import "../../less/config";

 .content{
 	color:#a0a0a0;
 	font-size:16px;
 }
.main-title{
	text-align: center;
	padding-top:100px;
	font-size:42px;
	color:#333333;
	line-height: 1.5;
	img { display:inline-block; margin-left:50px; width:130px; height: 40px;}
	
}
.tip{
	margin-top:56px;
	margin-left:auto;
	margin-right:auto;
	height: 1px;
	background: #e6e6e6;
	p{
		width:404px;
		position: relative;
		background: #fff;
		height: 14px;
		font-size:14px;
		top:-7px;
		text-align: center;
		margin:0 auto;
	}
}
.title-des{
	margin-top:50px;
	line-height: 1.5;;
}
.sub-title{
	color:#333333;
	font-size:20px;
	margin-top:50px;
}
.list{
	p {  margin-top:30px; line-height: 1.5;}
}

</style>

<template>
<div>
        <v-header></v-header>
        <v-content>
        	<div style="width:60%; margin:0 auto;">
        		<div class="main-title">
        		用户在黄金钱包上的投资均受法律保护 <img src="./image/zhonglun.png" alt="" />	
        		</div>
        		<p class="title-des">黄金钱包聘用了中伦律师事务所为常年法律顾问。中伦律师事务所创立于1993年，是中国司法部最早批准设立的合伙制律师事务所之一、中国规模最大的综合性律师事务所之一。中伦目前在北京、上海、深圳、广州、武汉、成都、重庆、青岛、东京、香港、伦敦和纽约设有办公室。中伦律师事务所为黄金钱包业务的合法性和用户权益保障等多方面提供法律意见。</p>
        		<div class="tip">
        			<p>关于用户在黄金钱包上的投资是否受法律保护，请参阅下文</p>
        		</div>
        		<div class="list">
        		<div class="sub-title">
        			黄金钱包业务合法
        		</div>
        		<p>黄金钱包主要为客户提供黄金产品的买入、存管及卖出服务，并根据用户买入后存管的期限、产品类型等事项就用户将所买入黄金存管至黄金钱包并委托黄金钱包管理的行为提供一定比例的收益。根据《中华人民共和国民法通则》、《中华人民共和国合同法》等法律、法规的规定，黄金钱包上述业务所建立的购买、管理、卖出、提取黄金产品的委托关系及保管关系均具有明确的法律依据，其经营上述业务具有合法合规性。</p>
        		<p>同时，黄金钱包在为客户提供买入和卖出黄金时，系根据客户委托通过依法设立的黄金销售机构或上海黄金交易所完成，其自身不属于黄金交易平台，符合《中国人民银行、公安部、工商总局、银监会、证监会关于加强黄金交易所或从事黄金交易平台管理的通知》（银发〔2011〕301号）的有关规定。</p>
        	     <div class="sub-title">
        	     	用户在黄金钱包购买黄金产品并享受存金收益的行为合法、有效
        	     </div>
        	     <p>1、用户与黄金钱包订立的线上电子合同合法、有效</p>
        	     <p>黄金钱包在开展业务过程中，通过产品工具与用户之间就买入黄金、黄金存管及委托管理、黄金卖出或提取黄金、资金结算或黄金交割事宜订立了明确的电子合同，并委托具备业务资质的机构对电子签名进行认证及电子合同的第三方存管。</p>
        	     <p>根据《中华人民共和国电子签名法》能够有形地表现所载内容，并可以随时调取查用的数据电文，视为符合法律、法规要求的书面形式，可靠的电子签名与手写签名或者盖章具有同等的法律效力。同时，黄金钱包与用户订立的电子合同符合《中华人民共和国电子签名法》等法律、法规的要求，其内容不存在《中华人民共和国合同法》、《民法通则》等法律、法规的情形，具有明确的法律效力。</p>
        	     <p>2、用户使用黄金钱包进行投资所得收益合法</p>
        	     <p>黄金钱包目前对注册用户买入黄金后的存金及委托管理事项提供一定比例的收益，上述收益系基于双方签署的协议，系双方真实的意思表示，对双方均具有明确的法律约束力，注册用户基于上述存金和委托管理的法律关系所取得的收益不存在违反法律、法规规定的情形，属于其合法收入。</p>
        	     <p>及委托管理的收益参照最高人民法院《关于人民法院审理借贷案件的若干意见》等有关规定，收益率未超过银行同期贷款利率的四倍，因此黄金钱包签名与手写签名或者盖章具有同等的法律效力。同时，黄金钱包与用户订立的电子合同符合《中华人民共和国电子签名法》等法律、法规的要求，其注册用户所得收益也不存在参照适用资金借贷相关规定而被认定为无效的法律风险。</p>
        	     <p>综上，黄金钱包所经营业务具有合法合规性，用户与黄金钱包订立的电子合同真实、有效，通过黄金钱包进行投资的收益系合法收益，受现有法律、法规的保护。</p>
        	</div>
        		</div>
        	
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
         beforeCreate:function(){
		window.scrollTo(0,0);
	    },
    }
</script>

