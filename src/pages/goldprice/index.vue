<style lang="less" scoped>
	@import "../../less/config";
	.chart-title {
		span {
			.fl();
			font-size: 16px;
			color: #a0a0a0;
		}
		ul {
			.fr();
			li {
				.fl();
				cursor:pointer;
				font-size: 16px;
				color: #333333;
				padding: 10px 24px;
				&.active {
					border: 1px solid #d8d8d8;
				}
			}
		}
	}
	
	.chart-wrap {
		width: 100%;
		height: 400px;
		margin-top:60px;
	}
	
	.title {
		.clearfix();
		margin-top: 100px;
		border-bottom: 1px solid @bordercolor;
		padding-bottom: 20px;
		span:first-child {
			.fl();
			font-size: 36px;
			color: #333333;
			.mt(5);
		}
		span:last-child {
			.fr();
			font-size: 16px;
			color: #a0a0a0;
			border: 1px solid;
			border: 1px solid #d8d8d8;
			border-radius: 4px;
			padding: 14px 30px;
			a {
				color: #a0a0a0;
			}
		}
	}
	
	.goldnew-ul {
		li {
			.clearfix();
			padding: 50px 0 0 0;
			&>img {
				.fl();
				width: 160px;
				height: 80px;
				margin-right: 50px;
			}
			&>div {
				overflow: inherit;
				p:first-child {
					font-size: 20px;
					color: #333333;
					margin-bottom: 10px;
					width: 800px;
					.nobreak();
				}
				p:nth-child(2) {
					font-size: 16px;
					color: #a0a0a0;
					.mb(20);
					&.famous-date{
						.mb(0);
					}
				}
				p:last-child {
					font-size: 16px;
					color: #a0a0a0;
					width: 1000px;
					.nobreak();
				}
			}
		}
	}
	
	.introduce {
		.mt(50);
		p:first-child {
			font-size: 20px;
			color: #333333;
			.mb(20);
		}
		p:last-child {
			width: 595px;
			line-height: 1.5;
			font-size: 16px;
			color: #a0a0a0;
		}
	}
	.famous-wrap{
		.pr();
		.mt(166);
		.people-img{
			.pa();
			width:363px;
			height:583px;
			background:url('./people.png') center center no-repeat;
			right:200px;
			top:-90px;
		}
	}
	
</style>
<template>
	<div>
		<v-header></v-header>
		<v-content class="row" style="padding-top:100px">
			<div>
				<div class="chart-title clearfix">
					<span>单位:元/克</span>
					<ul class="clearfix">
						<li :class="{active:prietab[0]}" @click="changeFlag(2,0)">24小时</li>
						<li :class="{active:prietab[1]}" @click="changeFlag(1,1)">7天</li>
						<li :class="{active:prietab[2]}" @click="changeFlag(0,2)">最近30天</li>
					</ul>
				</div>
				<div id="chart" class="chart-wrap">
					<v-hchart :queryFlag='queryFlag'></v-hchart>
				</div>
			</div>
			<div class="title">
				<span>黄金新闻</span>
				<span><router-link to="/goldnews">查看更多</router-link></span>
			</div>
			<ul class="goldnew-ul">
				<li v-for="item in goldnewsdata">
					<img src="./goldnews.png" alt="" />
					<div>
						<p>
							<router-link :to="'/goldnewsdetails/'+item.id">{{item.title}}</router-link>
						</p>
						<p>发布时间: {{item.date | formatTime}}</p>
						<p>{{item.summary}}</p>
					</div>
				</li>
			</ul>
			<div class="famous-wrap">
				<div class="title">
					<span>名家专栏</span>
					<span><router-link to="/article">查看更多</router-link></span>
				</div>
				<div class="introduce">
					<p>肖磊</p>
					<p>2007年进入黄金投资市场，是中国首批专业从事黄金投资市场调查、研究的从业者之一，曾任职国内知名黄金投资企业高级研究员。</p>
				</div>
				<ul class="goldnew-ul">
					<li v-for="item in articledata">
					<div>
						<p>
							<router-link :to="'/articledetails/'+item.id">{{item.title}}</router-link>
						</p>
						<p class="famous-date" >发布时间: {{item.date | formatTime}}</p>
						<p></p>
					</div>
				</li>
				</ul>
				<div class="people-img"></div>
			</div>

		</v-content>
		<v-footer></v-footer>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				goldnewsdata: {},
				articledata:{},
				prietab:[true,false,false],
				queryFlag:2
			}
		},
		 beforeCreate:function(){
		window.scrollTo(0,0);
	    },
		created() {
			this.getGoldNewsData();
			this.getArticleData();
		},
		methods: {

			getGoldNewsData() {
				var that = this;
				this.$http.post('/info/getHeadlinesList', { start: 0, size: 4 }).then(function(res) {
					var data = res.data;
					if(data.code === '0000') {
						that.goldnewsdata = data.data.headlinesList;
					}
				})
			},
			getArticleData() {
				var that = this;
				this.$http.post('/info/getArticleList', { start: 0, size: 3 }).then(function(res) {
					var data = res.data;
					if(data.code === '0000') {
						that.articledata = data.data.articleList;
					}
				})
			},
			changeFlag(flag,index){
				var arr=[false,false,false];
				arr[index]=true;
				this.prietab=arr;
				this.queryFlag=flag;
			}
		}
	}
</script>