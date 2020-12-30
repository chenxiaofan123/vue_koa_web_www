<template>
	<div>
		<v-header></v-header>
		<v-content>
			<div class="notice-detail">
				<h2 class="title">{{data.title}}</h2>
				<p class="sectitle">发布时间: {{data.date}}</p>
				<div class="content" style="width:60%; margin:0 auto;">
				<template v-for="item in content">
		    	 <p v-html="item"></p>
		        </template>
				</div>
			</div>
			
		</v-content>
		<v-footer></v-footer>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id:this.$router.currentRoute.params.id,
				data:'',
				content:''
			}
		},
		 beforeCreate:function(){
		window.scrollTo(0,0);
	    },
		created(){
			var that=this;
			this.$http.post('/info/getArticleById',{id:this.id}).then(function(res){
				var result=res.data;
				if(result.code==='0000'){
					that.data=result.data.article;
					var contentarr=[];
						var content=result.data.article.content;
						 content=content.replace(/(^\s*)|(\s*$)/g,"");
						 var arr= content.replace(/\s{2,}/g,"    ");
						 arr=arr.split("    ");
						arr.filter(function(item){
							return !!item
						 }).forEach(function(item){
						  	contentarr.push(item);
						 })
						 
						 that.content=contentarr;
				}
			})
		},
		mounted(){
	
		}
	}
</script>

<style lang="less" scoped>
 @import "../../less/config";
.notice-detail { text-align:center; padding:40px 40px 160px 30px;  margin:0 auto;}
.sectitle{
	margin:10px 0 30px 0;
	text-align: center;
	font-size:14px;
	color:#a0a0a0;
}
.notice-detail .title { color:#000000; font-size:24px; font-weight: bold; line-height: 1.5;}
.notice-detail .content p:first-child { margin-top:30px;}
.notice-detail .content p { color:#686868; font-size:16px; line-height:28px; margin-top:20px; text-align:left;}
.notice-detail .notice-info { float:right; width:128px; text-align:center; margin-top:30px;}
.notice-detail .notice-info p { color:#686868; font-size:14px; margin-top:10px; }
</style>