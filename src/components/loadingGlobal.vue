<template>
<div class="loading-mask" v-if="loadShow">
    <div class="loading-wrapper">
        <div class="img-wrapper"></div>
        <div class="loading-text">正在请求数据...</div>
    </div>
</div>
</template>

<script>
    export default{
        data(){
            return {}
        },
        computed:{
            loadShow(){
                return this.$store.state.loading.loadingShow;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../less/config';
    .loading-mask{
        position:fixed;
        width:100%;
        top:0;
        bottom:0;
        z-index:1000;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .loading-wrapper{
        height: 300px;
        width: 300px;
        background-color:#000;
        opacity: 0.6;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius:5px;
    }
    .img-wrapper{
       height: 90;
        width: 90px;
        background-image:url('./loading.svg');
        background-size:100% 100%;
        background-repeat:no-repeat;
        animation: rotate-forever 1.2s infinite ease-in-out;
    }
    .loading-text{
        height: 36px;
        font-size:32px;
        padding-top: 35px;
        color:#fff;
        text-align:center;
    }

     @keyframes rotate-forever {
        0% {
        transform: rotate(0deg)
        }
        100% {
        transform: rotate(360deg)
        }
    }
    
</style>