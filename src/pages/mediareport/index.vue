<style lang="less" scoped>
 @import "../../less/config";

	.media-ul{
		margin-top:60px;
		li { padding-top:40px; padding-bottom:40px; border-bottom:1px solid #d8d8d8;
           &:last-child{ border-bottom:0;}
		}
		.media-img{
			display:inline-block;
			.fl();
			width:160px;
			height:82px;
			margin-right:50px;
			border: 1px solid #e6e6e6;
			border-radius: 4px;
		}
		.media-summary{
           overflow: inherit;
           p:first-child{
              font-size:20px;
              color:#333333;
              .nobreak();
              width:930px;
              font-weight: normal;
           }
           p:nth-child(2){
           	 font-size:16px;
           	 color:#a0a0a0;
           	 margin-top:10px;

           }
           p:last-child{
           	font-size:16px;
           	 color:#a0a0a0;
           	  margin-top:20px;
           	 .nobreak();
              width:1000px;
           }
		}
	}
</style>
<template>
	<div class="medialist">
		<v-header></v-header>
		<v-content class="row">
			<ul class="media-ul">
			<li v-for="item in mediaInfoList">
				<img class="media-img" :src="item.webImgUrl">
				<div class="media-summary">
					<p class="title">
						<a target="_blank" :href="item.sourceUrl">{{item.title}}</a></p>
					<p>{{item.source}}  {{item.date | formattime}}</p>
					<p>{{item.summary}}</p>
				</div>
			</li>
		  </ul>
		<v-pagination :current="current" :size="size" :count="count"  :callback="changePage"></v-pagination>
		</v-content>
		<v-footer></v-footer>
	</div>
</template>
<script>
	 export default {
        data() {
            return {
            	current:1,
            	start:0,
            	size:6,
            	count:0,
            	mediaInfoList:''

            }
        },
         beforeCreate:function(){
		window.scrollTo(0,0);
	    },
        watch:{
           current(){
           	 this.getData();
           }
        },
        filters:{
        	formattime(value){
        		return value.split(' ')[0];
        	}
        },
        methods: {
           changePage(page,start){
           	 this.current=page;
           	 this.start=start;
           },
           getData(){
           	var that=this;
           	 this.$http.post('info/getMediaInfoList',{start:this.start,size:this.size}).then(function(res){
           	 	 var result=res.data;
           	 	 if(result.code==='0000'){
           	 	 	that.mediaInfoList=result.data.mediaInfoList;
           	 	 	that.count=result.data.count;
           	 	 }else{
           	 	 	if(result.msg){
           	 	 		alert(result.msg);
           	 	 	}
           	 	 	
           	 	 }
           	 })
           }
        },
        created() {
          this.getData();
        }

    }
</script>