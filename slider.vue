<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='slide-ul' :name="name">
      <li v-for="(item , index ) in slides" :key="index" v-show="index===nowIndex">
        <a :href="item.href" :target="target">
          <img :src="item.src" alt="">
        </a>
      </li>
    </transition-group>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides"
          @click="goto(index)"
          class="slide-page-point"
      >
        <a :class="{'active': index === nowIndex}">{{ index + 1 }}</a>
      </li>
    </ul>
    <div class="control-wrapper">
      <a class="prev" @click="goto(prevIndex)"></a>
      <a class="next" @click="goto(nextIndex)"></a>
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
        default: 1000
      },
      name: {
        type: String,
        default: 'move'
      },
      target: {
        type: String,
        default: '_blank'
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
      }
    },
    mounted () {
      this.runInv()
    }
  }
</script>

<style lang="less"  scoped>
  .slide-pages {
    position: absolute;
    bottom: 20px;
    right: 30px;
    li {
      display: inline-block;
      height: 18px;
      a {
        display: block;
        width: 6px;
        height: 6px;
        margin: 0 5px;
        border: 2px solid #fff;
        border-color: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        text-align: left;
        text-indent: -9999px;
        overflow: hidden;
        _zoom: 1;
        background: #f5f5f5;
        background: rgba(0, 0, 0, 0.4);
        -webkit-transition: all .2s;
        transition: all .2s;
        &.active {
          background: #fff;
          background: rgba(255, 255, 255, 0.4);
          border-color: #757575;
          border-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
  .control-wrapper {
    a {
      display: inline-block;
      position: absolute;
      top: 50%;
      width: 30px;
      height: 200px;
      transform: translateY(-50%);
    }
  }
  .prev {
    left: 25px;
   
    &:hover {
       background: url("./hoverprev.png") center center no-repeat;
    }
  }
  .next {
    right: 25px;
    display: inline-block;   
    &:hover {
      background: url('./hovernext.png') center center no-repeat;
    }
  }
  .slide-show {
    position: relative;
    overflow: hidden;
    height: 100%;
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