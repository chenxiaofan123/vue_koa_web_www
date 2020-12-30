<style lang="less" scoped>
 @import "../../less/config";

	.media-ul{
		margin-top:60px;
		li { padding-top:40px; padding-bottom:40px; border-bottom:1px solid #d8d8d8;
           &:last-child{ border-bottom:0;}
		}
		.notice-date{
			display:inline-block;
			.fl();
			width:40px;
			text-align: center;
			margin-right:50px;
			margin-top:-8px;
			i { display:block; width:100%; height: 4px; background:#d8d8d8;}
			p:first-of-type{
				font-size:36px;
                color:#ffba5f;
                margin-top:3px;
                .fontSpec;
			}
			p:last-of-type{
				font-size:16px;
                color:#a0a0a0;
                margin-top:3px;
			}
		}
		.media-summary{
           overflow: inherit;
           p:first-child{
              font-size:20px;
              color:#333333;
              .nobreak();
              width:930px;
           }
           p:nth-child(2){
           	 font-size:16px;
           	 color:#a0a0a0;
           	 margin-top:10px;

           }
		}
	}
</style>
<template>
	<div class=" medialist">
		<v-header></v-header>
		<v-content class="row">
			<ul class="media-ul">
			<li v-for="item in noticeInfoList">
				<div class="notice-date">
					<i></i>
					<p>{{getDay(item.date)}}</p>
					<p>{{getMonth(item.date)}}</p>
				</div>
				<div class="media-summary">
					<p class="title">
						<router-link :to="'articledetails/'+item.id">{{item.title}}</router-link></p>
					<p>发布时间：{{item.date}}</p>
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
            	noticeInfoList:''

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
           	 this.$http.post('info/getArticleList',{start:this.start,size:this.size,searchCount:true}).then(function(res){
           	 	 var result=res.data;
           	 	 if(result.code==='0000'){
           	 	 	that.noticeInfoList=result.data.articleList;
           	 	 	that.count=result.data.count;
           	 	 }else{
           	 	 	if(result.msg){
           	 	 		alert(result.msg);
           	 	 	}
           	 	 	
           	 	 }
           	 })
           },
           getMonth:function(date){
           	  if(!date){ return ''}
           	  var date=date.replace(/-/g,'/');
           	  var timeDate=new Date(date);
           	  var eMonth=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
           	  return eMonth[timeDate.getMonth()]
           },
           getDay(date){
           	  if(!date){ return ''}
           	  var arr=date.split('-')[2].split(' ');
           	  return  parseInt(arr[0]) ;
           }
        },
        created() {
          this.getData();
        }

    }
</script>