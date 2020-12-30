<style lang="less" scoped>
@import "../../less/config";
	.mt{
		margin-top:98px;
	}
.nav{
	width:100%;
	background:#fafafc;
	height:60px;
	line-height: 60px;
	position:fixed;
	top:80px;
	z-index:100;
	
	li{
		.fl();
		font-size:16px;
       color:#a0a0a0;
       &:not(:last-child)::after{
       	content:'';
       	display:inline-block;
       	width:4px;
       	height:4px;
       	border-radius:100%;
       	margin:0 10px;
       	background:#d8d8d8;
       	margin-bottom: 2px;
       }
       &:hover{
       	 cursor: pointer;
       	color:#333333;
       }
       &.active{
       	color:#333333;
		   .fontLight;
       }
	}
}
.con{
	margin-top:160px;
	margin-bottom:40px;
	color:#333333;
	padding-top:80px;
	.main-title{
		font-size:42px;
         color:#333333;
         text-align: center;
	}
	.sub-title{
		color:#333333;
       font-size:20px;
        margin-top:20px;
        text-align: center;
	} 
	.platform-ul{
		margin-top:60px;
		/*padding-bottom:72px;*/
		li{
			padding-top:40px;
			padding-bottom:40px;
			border-bottom: 1px solid #e6e6e6;
			.left{
				.fl();
				font-size:42px;
                 color:#ffba5f;
                 margin-right:80px;
                 width:165px;
				.fontSpec;
			}
			.right{
				p { font-size:20px;  margin-bottom:10px; }
				div { font-size:16px;color:#a0a0a0;}
				p.mt { margin-top:10px;}
			}
			&:last-child{
				border-bottom:0;
			}
		}
	}
	.account-ul,.quality-ul,.wind-ul{
		margin-top:100px;
		li { .fl(); width:300px;
		 text-align: center;
		 margin-right:160px;
		 img{ display:inline-block; width:60px; height: 60px;}
		 p {font-size:20px; margin-top:20px; }
		 div{
		 	font-size:16px;
            color:#a0a0a0;
            margin-top:20px;
            line-height: 1.5;
		 }
		 &:last-child{
		 	margin-right:0;
		 }
		}
	}
	.quality-ul,.wind-ul{
		li { width:440px; margin-right:240px;}
	}
	.wind-ul { li{ div{ text-align: left;}}}
	
	.wind-container{
		background-image:linear-gradient(45deg,#ffb74d  0%, #ffd54f 100%);
		  filter:~' progid:DXImageTransform.Microsoft.gradient(startcolorstr=#ffb74d,endcolorstr=#ffd54f,gradientType=1)';
         -ms-filter:~' progid:DXImageTransform.Microsoft.gradient(startcolorstr=#ffb74d,endcolorstr=#ffd54f,gradientType=1)';
        width:100%;
         height:400px;
         margin-top:100px;
	}
	.wind-c{
		.left{
			.fl();
			text-align: left;
			margin-top:100px;
			color:#fff;
			width:660px;
			p:first-child{
				font-size:20px;
			}
			p:nth-child(2){
				font-size:16px;
				line-height: 1.5;
				margin-top:50px;
			}
			p:last-child{
				font-size:12px;
				margin-top:50px;
			}
		}
		.right{
			.fr();
			padding-top:122px;
			img{
				display:inline-block;
				width:434px;
				height: 156px;
			}
		}
	}
	
	.legal-ul{
		li{
			margin-top:100px;
			.left{
				.fl();
				img{
					display:inline-block;
					width:160px;
					height: 82px;
					margin-right:40px;
				}
			}
			.right{
				overflow: hidden;
				p:first-child{
					font-size:20px;color:#333333;
				}
				p:last-child{
					font-size:16px;color:#a0a0a0; margin-top:20px; line-height: 1.5;
					a { color:#ffba5f;}
				}
			}
		}
	}

}
</style>

<template>
<div>
        <v-header :activeindex="3"></v-header>
        <v-content>
        	<div class="nav">
        		<ul class="row clearfix">
        			<li @click="tab(0)" :class="{active:show[0]}">平台可靠</li>
        			<li @click="tab(1)" :class="{active:show[1]}">账户安全</li>
        			<li @click="tab(2)" :class="{active:show[2]}">品质保障</li>
        			<li @click="tab(3)" :class="{active:show[3]}">风控严密</li>
        			<li @click="tab(4)" :class="{active:show[4]}">法律安全</li>
        		</ul>
        	</div>
        	<div class="con">
        		<div class="platform row" v-show="show[0]">
        			<!--平台可靠-->
        			<p class="main-title">背景雄厚</p>
        			<p class="sub-title">投资方背景实力雄厚  国资战略入股</p>
        			<ul class="platform-ul">
        				<li class="clearfix">
        					<div class="left">
        						2015.4
        					</div>
        					<div class="right">
        						<p>A轮千万美元投资</p>
        						<div>软银中国资本千万美元投资</div>
        					</div>
        				</li>
        				<li class="clearfix">
        					<div class="left">
        						2015.9
        					</div>
        					<div class="right">
        						<p>B轮1.07亿投资</p>
        						<div>软银中国资本领投，上海恒大集团、竞技世界、能图资本参与投资</div>
        					</div>
        				</li>
        				<li class="clearfix">
        					<div class="left">
        						2017.5
        					</div>
        					<div class="right">
        						<p>C轮2亿投资</p>
        						<div>中银国际旗下基金渤海中盛领投，光大控股旗下光控众盈资本、软银中国及慧科资本跟投</div>
        					</div>
        				</li>
        			</ul>
        			<p class="main-title mt">资质荣誉</p>
        			<p class="sub-title">广泛认可的黄金投资平台</p>
        				<ul class="platform-ul ">
        				<li class="clearfix">
        					<div class="left">
        						2015.10
        					</div>
        					<div class="right">
        						<p class="mt">中国黄金协会第三届理事会常务理事单位</p>
        					</div>
        				</li>
        				<li class="clearfix">
        					<div class="left">
        						2015.11
        					</div>
        					<div class="right">
        						<p>中国珠宝玉石首饰行业协会会员单位</p>
        						<p>陆家嘴金融创新全球峰会“最佳跨界移动互联网金融应用奖”</p>
        					</div>
        				</li>
        				<li class="clearfix">
        					<div class="left">
        						2015.12
        					</div>
        					<div class="right">
        						<p>中国互联网金融博物馆“2015互联网金融创新第三季度新秀”</p>
        						<p>金融界领航中国年度评选“优秀金融服务奖”</p>
        					</div>
        				</li>
        				<li class="clearfix">
        					<div class="left">
        						2016.1
        					</div>
        					<div class="right">
        						<p class="mt">创业邦“2015中国年度创新成长企业100强”</p>
        					</div>
        				</li>
        				<li class="clearfix">
        					<div class="left">
        						2016.8
        					</div>
        					<div class="right">
        						<p class="mt" >获得行业首家ICP经营许可证</p>
        					</div>
        				</li>
        			</ul>
        		</div>
        		<div class="account-safe row" v-show="show[1]">
        			<div class="main-title">账户安全</div>
        			<div class="sub-title">银行级别技术安全保障</div>
        			<ul class="account-ul clearfix">
        				<li>
        					<img src="./image/account-1.png" alt="" />
        					<p>同卡进出</p>
        					<div>
        						用哪个银行卡支付就只能用哪个银行卡提现，即使手机丢失，账号被盗，资金也只能回到自己的银行卡。
        					</div>
        				</li>
        				<li>
        					<img src="./image/account-2.png" alt="" />
        					<p>账户安全保险</p>
        					<div>
        						黄金钱包和中华保险合作，因盗刷、盗用而导致的资金损失，保险公司将进行赔偿。
        					</div>
        				</li>
        				<li>
        					<img src="./image/account-3.png" alt="" />
        					<p>隐私安全保障</p>
        					<div>
        						黄金钱包携手阿里云，构建业界领先的多重防火墙保护系统，严防网络入侵；所有用户信息都经过加密处理，任何人包括公司员工都无法获得用户隐私信息。
        					</div>
        				</li>
        			</ul>
        		</div>
        		<div class="row quality" v-show="show[2]">
        			<div class="main-title">每克黄金都是AU9999</div>
        			<div class="sub-title">来源正规  质检认证</div>
        			<ul class="quality-ul clearfix">
        				<li>
        					<img src="./image/quality-1.png" alt="" />
        					<p>黄金来源于国家级交易市场</p>
        					<div>
        						黄金钱包通过北京银行在上海黄金交易所（中国人民银行组建的黄金交易国家级市场）开立了黄金交易账户，为您进行实物黄金买卖操作，保证所有购买的黄金都是国家认可的Au9999实物黄金。
        					</div>
        				</li>
        				<li>
        					<img src="./image/quality-2.png" alt="" />
        					<p>拥有国家质检证书</p>
        					<div>
        						黄金钱包的品牌金条，均附有国家首饰质量监督检验中心颁发的质检证书，确保您拿到的实物黄金质量合格。
        					</div>
        				</li>
        			</ul>
        			<div class="main-title" style="margin-top:150px">有保险的实物黄金</div>
        			<div class="sub-title">保险、银行联手 保管万无一失</div>
        			<ul class="quality-ul clearfix">
        				<li>
        					<img src="./image/quality-3.png" alt="" />
        					<p>黄金存在银行万无一失</p>
        					<div>所有的实物黄金均存在中信银行保险箱中，由银行提供安全的保管服务。
        					</div>
        				</li>
        				<li>
        					<img src="./image/quality-4.png" alt="" />
        					<p>为每克黄金买保险</p>
        					<div>
        						黄金钱包和中华保险合作，为实物黄金购买了盗抢险和财产一切险，一旦发生抢劫、盗窃或其他导致黄金实物灭失的情况，保险公司将进行赔偿。
        					</div>
        				</li>
        			</ul>
        		</div>
        		<div class="wind" v-show="show[3]">
        			<div class="main-title" >风控严密</div>
        			<div class="sub-title">企业严格筛选  项目谨慎把关</div>
        			<ul class="wind-ul clearfix row">
        				<li>
        					<img src="./image/wind-1.png" alt="" />       					
        					<div>黄金钱包将用户投资的黄金出借给需要用金的企业（如芯片/首饰生产/首饰销售），企业按照约定期限偿还黄金和利息，利息在一借一还中产生。借金企业多为龙头企业，有良好信用记录和稳定还款能力。
        					</div>
        				</li>
        				<li>
        					<img src="./image/wind-2.png" alt="" />
        					<div>
        						若用金企业逾期未还，我们将采用包括但不限于处置抵押物，变现仓押资产（黄金实物）等方式，保证用户黄金安全；黄金钱包还成立了质保服务专款，如果用金企业逾期不还，我们会从质保服务专款专款里出资偿还您。
        					</div>
        				</li>
        			</ul>
        			<div class="wind-container ">
        				<div class="wind-c row">
        					<div class="left">
        						<p>美国著名信用评估公司FICO提供信用评级支持</p>
        						<p>黄金钱包与FICO合作（全世界2/3的信用卡发卡商采用FICO评级技术），针对黄金企业研发了谨慎的风控审核及管理系统GRAMS©，对黄金借入者进行全方位的信用风险分析和信用等级分级，不同等级企业可以获得不同级别的黄金借入额度，实现黄金信用风险可控。</p>
        					    <p>注：GRAMS，Gold Renting Assessment and Management System 黄金借偿信用评估管理系统。</p>
        					</div>
        					<div class="right">
        						<img src="./image/wind-fcc.png" alt="" />
        					</div>
        				</div>
        			</div>
        			<ul class="wind-ul clearfix row">
        				<li>
        					<img src="./image/wind-3.png" alt="" />   
        					<p>贷前审核</p>
        					<div>1.对于借金企业的资质/背景和偿还能力进行审核和实地调查。<br />2.对企业进行GRAMS和FICO信用评分，确认出借黄金额度。<br>3.核查企业的抵质押物和担保方：如抵押房产、质押股权、连带责任担保的有效性等。
        					</div>
        				</li>
        				<li>
        					<img src="./image/wind-4.png" alt="" />
        					<p>贷中、贷后管理</p>
        					<div>1.监测出借企业的财务和经营状况，管理其抵押、质押货物，确保其能按时还款。<br />2.对出借企业的情况进行持续追踪，大数据追踪形成行业信用
        					</div>
        				</li>
        			</ul>
        		</div>
        		<div class="legal row" v-show="show[4]">
        			<div class="main-title" >法律安全</div>
        			<ul class="legal-ul">
        				<li>
        					<div class="left">
        						<img src="./image/legal-1.png" alt="" />
        						<img src="./image/legal-2.png" alt="" />
        					</div>
        					<div class="right">
        						<p>顶级律所确认平台业务合规</p>
        						<p>黄金钱包已和顶级的律师事务所合作，保证平台的合规性，确保用户在黄金钱包的所有投资均受法律保护。具体详情请参阅 <router-link to="/legal">《法律意见书》</router-link></p>
        					</div>
        				</li>
        				<li>
        					<div class="left">
        						<img src="./image/legal-3.png" alt="" />
        					</div>
        					<div class="right">
        						<p>使用权威有效的电子合同</p>
        						<p>黄金钱包和电子合同服务商法大大合作，通过数字签名技术、第三方取时技术及防篡改技术，确保电子合同与纸质合同具有同等的法律证据效力，有效保障投资者的合法权益。</p>
        					</div>
        				</li>
        			</ul>
        		</div>
        	</div>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    export default{
        data(){
            return {
            	show:[true,false,false,false,false]
            	
            }
        },
         beforeCreate:function(){
		window.scrollTo(0,0);
	    },
        methods:{
        	tab(i){
        		if(this.show[i]){
        			return;
        		}
        		this.show=[false,false,false,false,false];
        		this.show[i]=true;
        		window.scrollTo(0,0);
        	}
        }
    }
</script>

