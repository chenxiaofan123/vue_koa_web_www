<template>
  <transition name="modal">
    <div class="modal-mask" id="broswertip" >
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body clearfix">
            <p class="title">
            	温馨提示：您当前的浏览器版本过低，可能存在安全风险，建议升级浏览器。
            </p>
            <div class="tuijian">
              	<p>推荐浏览器下载：</p>
            	  <a class=" btn-ie" target="_blank" href="">IE11浏览器</a>
            		<a class=" btn-chrome" target="_blank" href="http://www.google.cn/chrome/browser/desktop/index.html">谷歌浏览器</a>
            </div>
            <div class="download">
              	<p class="tip">或直接使用黄金钱包App扫码浏览</p>
            	 <p class="icon icon-logo"></p>
            	 <p class="icon icon-erweima"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>	
	export default{
		data(){
			return {
			}
		},
		props:{
		}
	}
</script>

<style lang="less" scoped>
@import "../../less/config";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  display:none;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  margin: 0px auto;
  padding: 50px 100px 50px 100px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  box-sizing: border-box;
  position:relative;
}

  .title{
  	font-size:24px;
    color:#333333;
    line-height:1.3;

  }
  .tuijian{
    margin:40px 0 20px 0;
    p { font-size:20px;
color:#333333; margin-bottom:20px; }
    a{
    	 color:#fff;
    	 font-size:20px;   
    	 .commbtn();
    	 display:inline-block;
    	 &.btn-ie{
    	  background:#1296db;
    	  margin-right:30px;
      }	
      &.btn-chrome{
      	background:#4cb749;
      } 
    }
    
  }
  .download{
  	margin-top:50px;
  	.tip{
  		font-size:20px;
color:#333333;
margin-bottom:20px;
  	}
  	.icon{
  		display:inline-block;
  		width:190px;
  		height:190px;
  	}
  	.icon-logo{
  		background:url('./downlogo.png') center center no-repeat;
  	}
  }
  


</style>