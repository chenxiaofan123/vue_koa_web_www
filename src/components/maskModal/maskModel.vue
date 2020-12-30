<style lang="less" scoped>
    .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.30);
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: table;
        .out-wrapper {
            display: table-cell;
            vertical-align: middle;
        }
    }

</style>
<!--背景是半透明的modal-->
<template>
    <div class="modal-mask" v-show="isModalShow">
        <div class="out-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        computed:{
            isModalShow(){
                return this.showModal;
            }
        },
        props:{
            showModal:{
                defalut:false
            }
        }
    }
</script>