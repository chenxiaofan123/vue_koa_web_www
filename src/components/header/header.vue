<style lang="less" scoped>

@import "../../less/config";
 
/**header 样式文件***/
.main-header {
   width: 100%;
    height: 80px;
    line-height: 80px;
    position: fixed;
    top: 0;
    left: 0;
   box-shadow:inset 0 -1px 0 0 #d8d8d8;
    background: #fff;
    color: #333;
    z-index:1000;
    .logo {
        .fl();
        margin-right: 30px;
        width: 130px;
        height: 44px;
        margin-top: 18px;
    }
    //实时金价
    .goldprice-show {
        .fl();
        color:#a0a0a0;
        font-size: 16px;
        cursor:pointer;
        .price {
            font-size: 32px;
            color:#ffba5f;
            font-weight: normal;
            .fontSpec;
        }
        .price-unit{
            color:#ffba5f;
             margin-right: 5px; 
        }
        .pr();
    }
    .icon-cycle {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("icon-cycle.png") center center no-repeat;  
        cursor: default;    
        &.refresh{
        	transform:rotate(360deg);
        	transition:transform 1s ease-in 0s;
        }

    }
    //menu
    .nav{
        .fr();
        li{ .fl(); margin-right:50px;  font-size:16px; font-weight: normal;
        i { display: none; background:#ffba5f; width:20px; height:2px; margin: 10px auto 0; position: relative; top:-32px;}
           &.active{
             a{color:#ffba5f;} 
             i { display: block; }
           }
         }

    }
    //立即充值
    .recharge {
        .fr();
        width:128px;
        text-align: center;
        background:#ffba5f;
        border-radius:4px;
        height:48px;
        line-height: 48px;
        color:#fff;
        font-size:16px;
        margin-top:16px;
        }


   .show-price-chart{
   	line-height: 1;
   	.pa();
   	box-shadow:0 5px 10px 0 rgba(51,51,51,0.20);
    border-radius:4px;
    background:#fff;
   	 width:343px;
   	 padding:20px 20px 20px 20px;
   	 left:0;
   	 top:70px;
   	 box-sizing: border-box;   
   	 cursor:default;	
   	 .header-chart-title{
   	 	margin-bottom:20px;
   	 	span:first-child { .fl();font-size:16px;
        color:#333333;}
        span:last-child{
	    .fr(); font-size:16px;
         color:#ffba5f;
         a{ color:#ffba5f;}
        }
   	 }
   	 .unit{
   	 	font-size:16px;
        color:#a0a0a0;
        margin-bottom:12px;
   	 }
   }
}


</style>


<template>
<header class="main-header clearfix">
    <div class="row">
        <router-link to="/" ><img class="logo" src="./logo.png" alt="logo" /></router-link> 
        <div class="goldprice-show" @click.self="linkprice" @mouseenter="pricechartstatus=true" @mouseleave="pricechartstatus=false">
            当前金价 :  <span class="price" @click.self="linkprice" id="J_price">{{price | formatPrice}}</span><span class="price-unit" >元/克</span> <span   :class="{refresh:flag}" class="icon-cycle"></span>            
            <div class="show-price-chart" v-if="pricechartstatus">
            	<div class="clearfix header-chart-title">
            		<span>24小时金价趋势</span>
            		<span><router-link to="/goldprice">立即查看</router-link></span>
            	</div>
            	<p class="unit">单位：元/克</p>
            	<div class="header-chart-wrap">
            		<v-hchart :styleObj="prichatobj"></v-hchart>
            	</div>
            </div>
        </div>
         <router-link to="/charge" class="recharge">立即充值</router-link>
        <div class="nav clearfix">
            <ul>
            <li :class="{'active':activeindex==1}">
            	<router-link to="/">首页</router-link>
            	<i></i>
            </li>
            <li :class="{'active':activeindex==2}">
            	<router-link to="/newhand">新手指引</router-link>
            	<i></i></li>
            <li :class="{'active':activeindex==3}">
            	<router-link to="/insurance">安全保障</router-link>
            	<i></i></li>
            <li :class="{'active':activeindex==4}">
            	<router-link to="/about">关于我们</router-link>
            	<i></i></li>
        </ul> 
        </div>
       
    </div>
</header>

</template>
<script>
    import { mapState } from 'vuex';
    export default{
        data(){
            return{
               price:'',
               flag:false,
               prichatobj:{
               	width:'100%',
               	height:'200px'
               },
               pricechartstatus:false,
               timerId:""
            }
        },
        props:{
            activeindex:{
            	type:[String,Number],
            	default:0
            }
        },
        filters:{
        	formatPrice(value){
        		return (value/100).toFixed(2);
        	}
        },
        methods:{
           getPrice(){
           	var that=this;
           	that.flag=false;
           	this.flag=true;
           	
           	 setTimeout(function(){
           	 	 that.flag=false;
           	 },1000)
           	  this.$http.post('price/query',{queryFlag:3}).then(function(res){
           	  	 var result=res.data;          	  	 
           	  	 if(result.code==='0000'){
           	  	 	 that.price=result.data.realtime_price;
           	  	 } else{
           	  	 	
           	  	 }
           	  })
           },
           linkprice(){
           	router.push('/goldprice')
           }
        },
        created(){
        	this.getPrice();       	
        },
        mounted(){
        	var that=this;       	
        	if(!that.timerId){
        	this.timerId=setInterval(()=>{that.getPrice()},5000)
        	}   
        	this.pricechartstatus=false;
        },
        destroyed(){
        	if(this.timerId){
        		clearInterval(this.timerId);
        	}
        }
    }
</script>

