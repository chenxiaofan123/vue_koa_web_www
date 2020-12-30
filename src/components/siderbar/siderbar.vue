<style lang="less" scoped>
    @import "../../less/config";

    .siderbar {
        .pf();
        width: 80px;
        background: #fff;
        right: 30px;
        bottom: 100px;
        box-shadow: 0 5px 10px 0 rgba(51, 51, 51, 0.10);
        border-radius: 4px;
        padding: 5px 0;
        li {
            &:last-child {
                border-bottom: 0;
            }
            .line {
                width: 40px;
                margin: 0 auto;
                height: 0;
                border-top: 1px solid #d8d8d8
            }
            .pr();
            .icon {
                width: 80px;
                height: 80px;
            }
            .icon-telephone {
                background: #fff url('./icon-telephone.png') center center no-repeat;
                cursor: pointer;
                &.hover{
                	background: #fff url('./icon-telephone-hover.png') center center no-repeat;
                }
            }
            .icon-customer {
                background: #fff url('./icon-sider-erweima.png') center center no-repeat;
                &.hover{
                	background: #fff url('./icon-sider-erweima-hover.png') center center no-repeat;
                }
            }
            .icon-weixin {
                background: #fff url('./icon-weixin.png') center center no-repeat;
                &.hover{
                	background: #fff url('./icon-weixin-hover.png') center center no-repeat;
                }
            }
            .arrow {
                .pa();
                top: 50%;
                transform: translateY(-50%);
                border-width: 11px;
                border-style: dashed dashed dashed solid;
                border-color: transparent transparent transparent #fff;
                right: -20px;
            }

            .show {
                .pa();
                background: #ffffff;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 4px;
            }
            .show-telephone {
                width: 112px;
                height: 50px;
                right: 76px;
                background: url('./icon-zixun.png') center center no-repeat;
            }
            .show-erweima {
                .pa();
                top: 50%;
                transform: translateY(-50%);
                right: 76px;
                width: 166px;
                height: 182px;
                background: url('./icon-erweima.png') center center no-repeat;

            }
            .show-weixin {
                .pa();
                top: 50%;
                transform: translateY(-50%);
                border-radius: 4px;
                right: 76px;
                width: 166px;
                height: 204px;
                background: url('./weixin-img.png') center center no-repeat;

            }

        }
    }
</style>

<template>
    <div class="siderbar">
        <ul>
            <li  id="J_meiqia" v-if="meiqiashow" @mouseenter="siderhover(0)" @mouseleave="siderleave">
                <div class="icon icon-telephone"  :class="{hover:show[0]}" @click="showmeiqia"></div>
                <div class="line"></div>
                <div class="show show-telephone" v-show="show[0]" >
                </div>
           </li>
            <li @mouseenter="siderhover(1)" @mouseleave="siderleave">
                <div class=" icon icon-customer" :class="{hover:show[1]}"></div>
                <div class="line"></div>
                <div class=" show-erweima" v-show="show[1]">
                </div>
            </li>
            <li @mouseenter="siderhover(2)" @mouseleave="siderleave">
                <div class=" icon icon-weixin" :class="{hover:show[2]}" ></div>
                <div class=" show-weixin" v-show="show[2]">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
	import util from 'util'
    export default{
        data(){
            return {
                show: [false, false, false],
                meiqiashow:true
            }
        },
        methods: {
            siderhover(index){
                var reset = [false, false, false];
                this.show = reset;
                this.show[index] = true;
            },
            siderleave(index){
                this.show = [false, false, false];
            },
            showmeiqia(){
                var telephone = this.$store.state.user.telephone;
                if (telephone) {
                    _MEIQIA('clientId', telephone);
                    _MEIQIA('metadata', {
                        telephone
                    });
                }
                _MEIQIA('init');
                _MEIQIA('allSet', function () {
                    _MEIQIA('showPanel');
                });
            }
        },
        mounted(){
        	if(util.isIE()){
        		this.meiqiashow=false;
        	}
        }

    }

</script>

