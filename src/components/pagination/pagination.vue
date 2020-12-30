
<style lang="less" scoped>
@import "../../less/config";
.paging {  font-family:Helvetica; margin:0 auto; margin-top:63px; margin-bottom:65px;  text-align:center;height: 54px;line-height: 52px;}
.paging span,.paging a { font-size:20px; padding:16px 20px; margin-right:20px; color:#a0a0a0; border:1px solid #d8d8d8; border-radius:4px;}
.padding span { padding:16px 32px;}
.paging span.current { background:#ffba5f; color:#fff;  border:0;}
.paging span.disabled { background:#e6e6e6;  border:0;}
</style>
<template lang="html">
  <div class="paging" v-if="show">
  	<a href="javascript:;" v-if="current>1"  @click="pageclick(current-1)" class="prevPage">上一页</a>
  	<span class="disabled" v-else>上一页</span>
  	<a href="javascript:;" v-if="current!=1&&current>=4&&pageCount!=4" class="tcdNumber" @click="pageclick(1)">1</a>
  	<span v-if="current-2>2&&current>pageCount&&pageCount>5">...</span>
  	<template v-for="item in start" v-if="item <= pageCount && item >= 1" >
  		<a href="javascript:;" v-if="item != current" class="tcdNumber" @click="pageclick(item)">{{item}}</a>
  		<span class="current" v-else >{{item}}</span>
  	</template>
  	<span v-if="current + 2 < pageCount - 1 && current >= 1 && pageCount > 5">...</span>
  	<a href="javascript:;" v-if="current != pageCount && current < pageCount -2  && pageCount != 4" class="tcdNumber" @click="pageclick(pageCount)">{{pageCount}}</a>
  	<a href="javascript:;" v-if="current < pageCount" @click="pageclick(current+1)" class="nextPage">下一页</a>
  	<span class="disabled" v-else>下一页</span>
  </div>
</template>

<script>
export default {
    props: {
      current: {
        type: [String, Number],
        required: true
      },
      count:{
      	type:[Number],
      	required:true
      },
      size:{
      	type:Number,
      	required:true
      },
      callback: {
        default() {
          return function callback() {
            // todo
          }
        }
      }
    },
    computed: {
    	show(){
    		return this.count>this.size?true:false
    	},
      start(){
      	var arr=[];
      	       var start = this.current -2,end = this.current+2;
				if((start > 1 && this.current < 4)||this.current == 1){
					end++;
				}
				if(this.current > this.pageCount-4 && this.current >= this.pageCount){
					start--;
				}				
				for(;start<=end;start++){
					arr.push(start);
				}
				return arr;				     	
      },
      pageCount(){
      	 var  pageCount=Math.ceil(this.count/ parseInt(this.size));
      	 return pageCount;
      }
    },
    methods: {
      pageclick(page) {
        if(typeof this.callback=="function"){
        	if(page<=0){
        		page=1;
        	}
        	if(page>this.pageCount){
        		page=this.pageCount
        	}
        	var start=(page-1)*this.size;
        	 this.callback(page,start)
        }
      }
    }
}
</script>

