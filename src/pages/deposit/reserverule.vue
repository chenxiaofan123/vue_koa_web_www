<style lang="less" scoped>
@import "../../less/config";
  .rule-content .title {
	text-align: center;
	border-bottom: 1px solid #dedede;
	font-size: 24px;
	line-height: 100px;
	color: #382700;
	font-weight: bold;
}

.rule-content .content .info p {
	margin-top: 30px;
	line-height: 22px;
	font-size: 16px;
}

.rule-content .content .table {
	font-size: 16px;
	border-spacing: 0px;
	margin-top: 50px;
	margin-bottom: 98px;
	border-collapse: collapse;
}

.rule-content .content .table th {
	line-height: 70px;
	border: 1px solid #000;
	padding: 0 20px;
}

.rule-content .content .table .type {
	width: 798px;
	background: #d4d4d4;
	font-size: 18px;
	color: #676767;
	padding-left: 153px;
}

.rule-content .content .table .loss {
	width: 204px;
	background: #d4d4d4;
	font-size: 18px;
	color: #676767;
	text-align: center;
}

.rule-content .content .table th dl {
	line-height: 18px;
}

.rule-content .content .table .loss-data {
	text-align: center;
}

dl.spec-tip {
	text-align: center;
	font-size: 12px;
	margin-top: 6px;
	color: #908f8f;
}

</style>

<template>
<div>
        <v-header></v-header>
        <v-content class="row rule-content">
        	<p class="title">黄金钱包存金业务须知</p>
			<div class="content">
				<div class="info">
					<p>1.黄金钱包存金业务是指，黄金钱包用户将其拥有的黄金实物交由北京盈衍网络科技有限公司（“黄金钱包”品牌创立者及所有企业）寄存管理，在存管期间，北京盈衍网络科技有限公司拥有有该实物黄金的使用权，并按照协议规定帮助用户进行卖出、交割、兑换实物黄金等操作。</p>
					<p>2.黄金钱包本业务只针对年满18周岁的中国大陆地区公民开放，该公民需具有充分的民事权利能力和民事行为能力，并需在办理此业务时成为黄金钱包的注册用户，并同意黄金钱包的所有网上服务条款；</p>
					<p>3.您需要在存金业务办理时，向北京盈衍网络科技有限公司及其授权的第三方机构，出示您的身份证原件、黄金购买发票或销售凭证等资料，北京盈衍网络科技有限公司及其授权的第三方机构将留存您的身份证复印件、黄金购买发票或销售凭证的复印件等资料作为备案；</p>
					<p>4.您需承诺对您所提供的黄金实物享有合法、完整的所有权（包括但不限于占有、使用、收益和处分的权利）并不受任何在先权利限制；</p>
					<p>5.您需同意自愿放弃该黄金的实物形态，并授权北京盈衍网络科技有限公司及其授权的第三方机构对您所提供的黄金实物进行破坏性检测，您需理解并认可在破坏性检测过程中可能出现的由于正常损耗导致黄金实物的重量减少，您需保证不会因为上述破坏性检测及/或可能出现的由于正常损耗导致黄金实物重量减少而向北京盈衍网络科技有限公司提出任何权利主张；</p>
					<p>6.您需承诺并保证在存金过程中提供的信息均真实、准确、完整，不存在任何虚假、误导或重大遗漏，如与事实不符，您愿意承担由此引起的一切法律责任。</p>
					<p>7.您的黄金实物将破坏性检测后的重量基础上，按照如下损耗率扣除后，计入黄金钱包账户：</p>
				</div>
				<table class="table">
					<thead>
						<tr>
							<th class="type" colspan="2">黄金类型</th>
							<th class="loss">
								<dl>损耗率</dl>
								<dl class="spec-tip">因金店损耗率有差异，此损耗仅供参考</dl>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th><dl>黄金钱包
								</dl>
								<dl>黄金产品
								</dl></th>
							<th>金条/投资金条（AU9999）</th>
							<th class="loss-data">0%</th>
						</tr>
						<tr>
							<th><dl>合作商家
								</dl>
								<dl>黄金产品
								</dl></th>
							<th>工艺金条、饰品</th>
							<th class="loss-data">1%</th>
						</tr>
						<tr>
							<th rowspan="5"><dl>非合作
								</dl>
								<dl>商家
								</dl></th>
							<th>投资金条[AU9999]（包括银行等机构出售的投资金条产品）</th>
							<th class="loss-data">0.5%</th>
						</tr>
						<tr>
							<th>工艺金条[AU999]（包括银行等机构出售的收藏类黄金产品）</th>
							<th class="loss-data">2%</th>
						</tr>
						<tr>
							<th>千足金/万足金饰品</th>
							<th class="loss-data">3%</th>
						</tr>
						<tr>
							<th>足金饰品</th>
							<th class="loss-data">5%</th>
						</tr>
						<tr>
							<th>其他成色金制品</th>
							<th class="loss-data">酌情</th>
						</tr>
					</tbody>
				</table>
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

