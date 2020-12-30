
<style lang="less"  scoped>
@import "../../less/config";
  .slide-pages {
    position: absolute;
    bottom: 20px;
    left:50%;
    transform:translateX(-50%);
    li {
      display: inline-block;
      height: 18px;
      a {
        display: block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        cursor:pointer;
       /*// border: 2px solid #fff;
        //border-color: rgba(255, 255, 255, 0.3);*/
        border-radius: 10px;
        text-align: left;
        text-indent: -9999px;
        overflow: hidden;
        _zoom: 1;
        background: #f5f5f5;
        background: rgba(255, 255, 255, 0.4);
        -webkit-transition: all .2s;
        transition: all .2s;
        &.active {
          background: #fff;
          background: rgba(255, 255, 255,1);
          /*//border-color: #757575;
          //border-color: rgba(0, 0, 0, 0.4);*/
        }
      }
    }
  }
  .control-wrapper {
    .clearfix();
    a {
      display: inline-block;
      position: absolute;
      top: 50%;
      width: 80px;
      height: 200px;
      transform: translateY(-50%);
      cursor: pointer;
    }
 
  .prev {
    left: 25px;  
     /*&:hover {
        background: url("./hoverprev.png") center center no-repeat;
    }*/
  }
  .next {
    right: 25px;
    display: inline-block;   
     /*&:hover {
       background: url('./hovernext.png') center center no-repeat;
     }*/
  }
  }
  .slide-show {
    position: relative;
    overflow: hidden;
    height: 100%;
    &:hover{  
    	.control-wrapper{
    		.prev{
  		background: url("./hoverprev.png") center center no-repeat;
  		}
  	.next{
  		background: url('./hovernext.png') center center no-repeat;
  	}
    	}  	   
  	
  }
 }
  .icon-play{
    .pa();
    width:80px;
    height:80px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:url('./icon-play.png') center center no-repeat;
    z-index:100;
    cursor: pointer;
  }
  .slide-ul {
    width: 100%;
    height: 100%;
    li {
      position: absolute;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .move-enter-active {
    transition: all 0.5s ease;
    transform: translateX(0)
  }
  .move-leave-active {
    transition: all 0.5s ease;
    transform: translateX(-100%);
  }
  .move-enter {
    transform: translateX(100%);
  }
  .move-leave {
    transform: translateX(0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='slide-ul' :name="name">
      <li v-for="(item , index ) in slides" :key="index" v-show="index===nowIndex">
        <a :href="item.href" :target="target" :ref="'link'+index" >
          <img :src="item.src" alt="">
        </a>
      </li>
    </transition-group>
    <div class="icon-play" v-show="iconflag" @click="play(nowIndex)">      
    </div>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides"
          @click="goto(index)"
          class="slide-page-point"
      >
        <a :class="{'active': index === nowIndex}">{{ index + 1 }}</a>
      </li>
    </ul>
    <div class="control-wrapper">
    <div class="prevwrap">
       <a class="prev" @click="goto(prevIndex)"></a>
    </div>
    <div class="nextwrap">
       <a class="next" @click="goto(nextIndex)"></a>
    </div>  
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 3000
      },
      name: {
        type: String,
        default: 'move'
      },
      target: {
        type: String,
        default: '_blank'
      },
      iconflag:{
        type:Boolean,
        default:false
      }
    },
    data () {
      return {
        nowIndex: 0
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.nowIndex = index;
        this.$emit('slidechange',index);
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      },
      play(index){
      	 if(this.slides[index].href){
      	 	var key='link'+index;
      	 	 this.$refs[key][0].click();
      	 }
      }
    },
    mounted () {
      this.runInv();
      //console.log(this.$refs);
    }
  }
</script>
