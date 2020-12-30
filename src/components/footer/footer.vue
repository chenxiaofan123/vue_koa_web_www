<style lang="less" scoped>
  @import "../../less/config";
  .footer{
    width:100%;
    background:#fafafc;
    position:absolute;
    bottom:0;
    .tips{
      width:100%;
      text-align: center;
      color:#a0a0a0;
      font-size:20px;
      padding-bottom:20px;
      padding-top:60px;
      background:#fff;
      .fontLight;
    }
    .footer-container{
       padding-top:60px;
         color:#a0a0a0;
    }
    .content1{
      padding-bottom:45px;
      border-bottom:1px solid #d8d8d8;
    
      &>div{
      	.fl();
      	
      }
    }

    .footer-item1{
    	p:first-child { font-size:16px;
      color:#a0a0a0; margin-bottom:20px; }
      width:411px;
      li{
      	.fl();
      	font-size:14px;
      	margin-right:50px;
      	margin-bottom:10px;
      	
      	a { color:#a0a0a0;}
      	a:hover { color:@hovercolor;}

      }
    }
     .footer-item2{
    	p:first-child { font-size:16px; margin-bottom:20px;
      color:#a0a0a0; }
      width:558px;
      li{
      	.fl();
      	font-size:14px;
      	margin-right:50px;
      	margin-bottom:10px;
      }
      li:first-child{ width:234px;}
       li:nth-child(3){ width:234px;}
    }
    
    .footer-item3{
    	p:first-child { font-size:32px; margin-bottom:10px; font-weight: normal; text-align: right; .fontSpec;}
    	p:nth-child(2){font-size:12px; margin-bottom:16px;}
    	.outlink{
    		.fr();
    		a { display: inline-block; width:30px; height: 30px;  margin-right:20px; cursor: pointer;}
    		a.wechat{
    			background: url(./icon_wechat_normal.png) center center no-repeat;
    			.pr();
    			&:hover{
    				background: url(./icon_wechat.png) center center no-repeat;
    				.ceil-wechat{
    					display:block;
    				}
    			}
    			.ceil-wechat{
    				.pa();
    				width:158px;
    				height:198px;
    				left:50%;
    				transform:translateX(-50%);
    				bottom:30px;
    				background: url('./ceil_weixin.png') center center no-repeat;
    				display:none;
    			}
    		}
    		a.weibo{
    			 margin-right:10px;
    			background: url(./icon_weibo_normal.png) center center no-repeat;
    			&:hover{
    				background: url(./icon_weibo.png) center center no-repeat;
    			}
    		}
    		
    	}
    }
     .content2{
    	padding-top:9px;
    	padding-bottom:30px;
        font-size:12px;
    	p { .fl(); height: 32px; line-height: 32px;}
    	p:first-child{
    		width:270px;
    	}
    	p:nth-child(2){ width:740px;}
    	p:last-child{
    		img{ display: inline-block; width:80px; height:32px; margin-right:10px;cursor:pointer}
    		img:last-child { margin-right:0;}
    	}
    }
  }
</style>
<template>
  <footer class="footer">
     <div class="tips" :style="{'background':tipscolor}">
       市场有风险，投资需谨慎
     </div>
     <div class="row footer-container">
       <div class="content1 clearfix">
         <div class="footer-item1">
           <p>了解我们</p>
           <ul>
             <li><router-link to="/insurance" >安全保障</router-link></li>
             <li><router-link to="/eleContract" >下载电子合同</router-link></li>
             <li><router-link to="/useragreement" >用户协议</router-link></li>
             <li><router-link to="/about" >关于我们</router-link></li>
             <li><router-link to="/deposit" >存提金教程</router-link></li>
           </ul>
         </div>
         <div class="footer-item2">
           <p>联系我们</p>
           <ul>
             <li>地址：北京市朝阳区望京浦项中心B座</li>
             <li>邮编：100102</li>
             <li>邮箱：service@g-banker.com</li>
           </ul>
         </div>
         <div class="footer-item3" style="float:right;">
           <p>4000-339-993</p>
           <p>工作日 9:00-21:00  非工作日 10:00-15:00</p>
           <div class="outlink">
           	<a class="icon wechat">
           		<div class="ceil-wechat"></div>
           	</a>
            <a class="icon weibo" href="http://weibo.com/huangjinqianbao" target="_blank"></a>
           </div>
         </div>
       </div>
       <div class="content2 clearfix">
        <p>京ICP备14027891号-1    京ICP证160991号</p>
        <p>Copyright ©2016 G-banker.com, All Rights Reserved. 北京盈衍网络科技有限公司</p>
        <p style="float:right;">
            <a href="https://ss.knet.cn/verifyseal.dll?sn=e14112711010856466vg26000000&ct=df&a=1&pa=0.7663032277487218"><img src="./footer1.png" alt="" /></a>
            <a href="https://sealinfo.websecurity.norton.com/splash"><img src="./footer2.png" alt="" /></a>
        </p>
       </div>
     </div>
  </footer>
</template>
<script>
  import util from 'util'
  import { mapState } from 'vuex'
  export default {
    computed: mapState({ user: (state) => state.user }),
    data () {
      return {
        count: 0,
        list: []
      }
    },
    props:{
    	'tipscolor':{
    		default:'#fff'
    	}
    },
    created () {
     
    },
    methods: {
    }
  }

</script>
