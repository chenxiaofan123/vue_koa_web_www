<style lang="less" scoped>
    .logo-wrapper {
        margin: 0 auto;
        margin-bottom: 3.9%;
        width: 186px;
        height: 60px;
        background-image: url("../login/gbanker_logo.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .success-window {
        width: 23.4%;
        height: 19.5%;
        margin: 0 auto;
        border-radius: 4px;
        border: 1px solid #D8D8D8;
        display: table;
        .inner-wrapper {
            display: table-cell;
            vertical-align: middle;
            width: 100%;
            .success-header {
                .suc-tag {
                    display: inline-block;
                    margin-right: 0.5%;
                    height: 36px;
                    width: 36px;
                    background-image: url("success.png");
                    background-repeat: repeat;
                    background-size: 100% 100%;
                    vertical-align: top;
                }
                font-size: 36px;
                color: #333333;
                text-align: center;
            }
            .success-tips {
                margin-top: 30px;
                text-align: center;
                font-size: 16px;
                color: #A0A0A0;
            }
        }

    }
    .out-wrapper {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        display: table;
        width: 100%;
        height: 100%;
        display: table;
        .out-inner-wrapper {
            display: table-cell;
            vertical-align: middle;
        }
    }
</style>

<template>
    <div class="out-wrapper">
        <div class="out-inner-wrapper">
            <div class="logo-wrapper"></div>
            <div class="success-window">
                <div class="inner-wrapper">
                    <div class="success-header"><div class="suc-tag"></div>支付成功</div>
                    <div class="success-tips">{{countDown}}s后自动关闭</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                countDown:5
            }
        },
        mounted: function () {
            var countDown = this.countDown;
            var that = this;
            var timer = setInterval(function () {
                if(--countDown <0) {
                    window.open('', '_self', '').close();
                    clearInterval(timer);
                    return;
                }
                that.countDown = countDown;
            }, 1000);
        }
    };
</script>