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
            		<slot></slot>
            	</div>
            	
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
			show:{
				default:false
			}
		},
		computed:{
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