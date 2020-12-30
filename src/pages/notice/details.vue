<template>
	<div>
		<v-header></v-header>
		<v-content>
			<div class="row notice-detail">
				<h2 class="title">{{data.title}}</h2>
				<div class="content">
				<template v-for="item in content">
		    	 <p>{{item}}</p>
		        </template>
				</div>
				<div class="notice-info">
				<p>黄金钱包</p>
				<p>{{ data.date | formatTime}}</p>
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
			this.$http.post('/info/getNoticeInfoDetail',{noticeId:this.id}).then(function(res){
				var result=res.data;
				if(result.code==='0000'){
					that.data=result.data;
					var contentarr=[];
						var content=result.data.content;
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
.notice-detail { text-align:center; padding:40px 40px 160px 30px; width: 60%;}
.notice-detail .title { color:#000000; font-size:24px; font-weight: bold;}
.notice-detail .content p:first-child { margin-top:30px;}
.notice-detail .content p { color:#686868; font-size:16px; line-height:28px; margin-top:20px; text-align:left;}
.notice-detail .notice-info { float:right; width:128px; text-align:center; margin-top:30px;}
.notice-detail .notice-info p { color:#686868; font-size:14px; margin-top:10px; }
</style>