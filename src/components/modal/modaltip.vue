<template>
  <transition name="modal">
    <div class="modal-mask" v-show="show">
      <div class="modal-wrapper">
        <div class="modal-container">
        	<div class="close" @click="$emit('close')"></div>
          <div class="modal-body clearfix">
            <div class="left">
            	<p class="tip">提示</p>
            	<div class="des">
            		<p v-for="item in showtext">{{item}}</p>
            	</div>
            	
            </div>
            <div class="right">
            	<div class="erweibg"></div>
            	<p>扫描下载App</p>
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
				text:{
					'forgetpassword':'请到黄金钱包 App 中“我的”-“设置”-“安全中心”找回密码。',
					'1':'您尚未绑定银行卡，为了您的账户安全，请您于黄金钱包 App 中“我的”-“设置”，完成绑卡后再进行充值。',
					'download':'扫描二维码<br>下载黄金钱包App 立即投资!'
				}
			}
		},
		props:{
			type:{
				default:1
			},
			show:{
				default:false
			}
		},
		computed:{
			showtext:function(){
				var stext=[];
				var text=this.text[this.type];
				if(text){
					stext=text.split('<br>');
				}
				return stext;
			}
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 720px;
  margin: 0px auto;
  padding: 50px 100px 76px 100px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  box-sizing: border-box;
  .pr();
  
  .close{
  	.fr();
  	.pa();
  	right:30px;
  	width:50px;
  	height: 50px;
  	background:url('close.png') center center no-repeat;
  	background-size:50% 50%;
    top:15px;
    cursor: pointer;
    
  }
  .left{
  	.fl();
  	width:370px;
  	p.tip{
  		font-size:20px;
       color:#333333;
  	}
  	.des{
  		margin-top:15px;
  		p{
  		font-size:20px;
      color:#333333;
      line-height: 1.5;
      
  	}
  	}
  	
  	
  }
  .right{
  	.fr();
  	.erweibg{
  		width:120px;
  		height:120px;
  		background:url('erweima.png') center center no-repeat;
  	}
  	p{
  		font-size:16px;
       color:#a0a0a0;
       margin-top:10px;
       text-align: center;
  	}
  	
  }
}

.modal-body {
  
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>