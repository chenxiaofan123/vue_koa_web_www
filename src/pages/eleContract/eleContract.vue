<style lang="less" scoped>
    @import "../../less/config";
    .clear{
        content:'';
        height:0;
        display: block;
        clear: both;
    }
    .ele-contract{
        .ele-contract-title{
            background:#fafafc;
            height:60px;
            line-height:60px;
            font-size:16px;
            position: relative;
            .choice{
            float:left;
              &>span{
                  border-right:1px solid #e6e6e6;
                  padding-right:20px;
              }
              &>div{
                    display: inline-block;
                    position:relative;
                    padding-left:20px;
                }
              .up{
                  width: 0;
                  height: 0;
                  border-left: 4px solid transparent;
                  border-right: 4px solid transparent;
                  border-bottom: 4px solid #000;
                  position: absolute;
                  right: -14px;
                  top: 28px;
              }
              .down{
                  width: 0;
                  height: 0;
                  border-left: 4px solid transparent;
                  border-right: 4px solid transparent;
                  border-top: 4px solid #000;
                  position: absolute;
                  right: -14px;
                  top: 28px;
              }
              .choice-content{
                 position:relative;
              div.choice-opt{
                  cursor: pointer;
              }
                  div.choice-detail{
                      background:#ffffff;
                      box-shadow:0 5px 10px 0 rgba(51,51,51,0.10);
                      border-radius:4px;
                      width:160px;
                      position:absolute;
                      top:40px;
                      left:0;
                      ul{
                      padding-top:10px;
                          li{
                              line-height: 36px;
                              height:36px;
                              box-sizing: border-box;
                              cursor: pointer;
                              a{
                                  display: block;
                              }
                              a:hover{

                                  background:#ffba5f;
                                  color:#fff;
                              }
                              span{
                                  padding-left:20px;
                              }
                              &.checked{
                                   span{
                                       border-left:2px solid #ffba5f;
                                   }
                               }
                          }
                      }
                  }
              }
            }
            .why{
                float:right;
                cursor: pointer;
            }
            .why-content{
               position:absolute;
                top: 40px;
                right:0;
                background:#ffffff;
                box-shadow:0 5px 10px 0 rgba(51,51,51,0.10);
                border-radius:4px;
                width:360px;
                height:238px;
                padding-left:20px;
                div{line-height: 1}
                .title{
                    font-size:16px;
                    color:#333333;
                    border-bottom:1px solid #e6e6e6;
                    position:relative;
                    height:55px;
                    line-height:55px;
                    .close{
                        position:absolute;
                        right:15px;
                        top:15px;
                        cursor: pointer;
                        width:30px;
                        height: 30px;
                        div{
                            width:1px;
                            height:20px;
                            border-left:1px solid #e6e6e6;
                            position:absolute;
                            top:0;
                            left:15px;
                            &:first-child{
                                 transform:rotate(-45deg);
                             }
                            &:last-child{
                                 transform:rotate(45deg);
                            }
                        }
                    }
                }
                .content{
                    font-size:14px;
                    color:#a0a0a0;
                    p{margin-top:20px;line-height: 1.2}
                }
            }
            &:after{
               .clear;
               }
             .row{

             position:relative;
    &:after{
     .clear;
     }
             }
        }
        .content-bg{
            padding-top:40px;
            /*padding-bottom:52px;*/
        .no-record{
            height:330px;
            line-height:330px;
            width:400px;
            text-align: center;
            font-size:36px;
            color:#a0a0a0;
            text-align: center;
            margin:0 auto;
        }
           table{
               width:100%;

           td{
               text-align:center;

            }
           thead{
               font-size:16px;
               color:#a0a0a0;
               border-bottom:1px solid #e6e6e6;
              td{
                  padding-bottom:17px;
                  span{
                      display: block;
                      border-right:1px solid #d8d8d8;
                  }
                  &:last-child{
                       span{border-right:0}
                   }
              }
           }
          thead,tbody{

                   td:first-child{
                       width:29.75%;
                   }
                   td:nth-child(2),td:nth-child(3){
                       width:22.29%;
                   }
                   td:nth-child(4){
                       /*width:19%;*/
                   }
               }
         tbody{
            tr{
                border-bottom:1px solid #e6e6e6;

               td{
                   padding:28px 0;
                   height:40px;
                   div{display: block;height:100%;color:#333333;font-size:20px;}
                   &:first-child{text-align: left}
                   &:not(:first-child){
                     div{line-height: 40px}
                    }
                   &:first-child{
                     div{
                         p:first-child{
                             font-size:20px;
                             color:#333333;
                             line-height: 20px;
                         }
                         p:last-child{
                             margin-top:10px;
                             font-size:14px;
                             color:#a0a0a0;
                         }
                     }
                    }
                    &:last-child{

                        div{
                            border-right:0;
                            a{
                                border:1px solid #d8d8d8;
                                border-radius:4px;
                                width:78px;
                                height:34px;
                                line-height:34px;
                                display: inline-block;
                                color:#d8d8d8;
                                font-size:16px;
                                &:last-child{margin-left:20px;}
                            }
                        }

                    }
                    div.opt{
                       a{
                           cursor: pointer;
                       }
                       a:hover{
                           border:1px solid #ffba5f;
                           color:#ffba5f;
                       }
                    }

                }
                &:last-child{ border-bottom:0;}

                div{
                    border-right:1px solid #d8d8d8;
                    &.noData{font-size:20px;color:#a0a0a0;}
                }
            }
           }
           }
        }
    }
</style>
<template>
    <div>
        <v-header></v-header>
        <v-content   class="ele-contract">
            <div class="ele-contract-title">
               <div class="row">
                   <div class="choice">
                       <span>请选择您要查看的电子合同类型</span>
                       <div class="choice-content">
                           <div class="choice-opt" @click="optType"><span>{{currentOrderText}}</span><i :class="isShowType?'down':'up'"></i></div>
                           <div class="choice-detail" v-show="isShowType">
                               <ul>                                   
                                   <li v-for="item in ruleList" :class="{checked:item.ruleKey==currentOrderKey}" @click="changeRule(item.ruleKey,item.ruleValue)">
                                      <a><span>{{item.ruleValue}}</span></a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
                   <div class="why" @click="whyQuery">为什么查不到我的电子合同？</div>
                   <div class="why-content" v-show="isShowTips">
                       <div class="title">
                           <span>为什么查不到我的电子合同？</span>
                           <div class="close" @click="closeQuery">
                               <div></div>
                               <div></div>
                           </div>
                       </div>
                       <div class="content">
                           <p>1. 电子合同自2016年8月2日后随购买行为而产生，在此日期前的订单无电子合同；</p>
                           <p>2. 2016年8月2日至11月27日期间购买流动金，仅生成一张电子合同；</p>
                           <p>3. 在您购买前未同意黄金钱包为您申请电子签名证书。</p>
                       </div>
                   </div>
               </div>
            </div>

            <div class="content-bg">
               <div class="row">
                   <div v-show="count==0" class="no-record">您暂时还没有该类型合同</div>
                  <table v-show="count!=0">
                      <thead>
                      <td><span>产品名称</span></td>
                      <td><span>克重（克）</span></td>
                      <td><span>订单总额（元）</span></td>
                      <td><span>操作</span></td>
                      </thead>
                      <tbody>
                      <tr v-for="item in orderList">
                          <td>
                              <div>
                                  <p>{{item.depositName}}</p>
                                  <p>{{item.orderTime}}</p>
                              </div>
                          </td>
                          <td>
                              <div :class="item.orderGoldWeight?'':'noData'" style="font-weight: 400;">
                                  {{item.orderGoldWeight?(item.orderGoldWeight/1000).toFixed(3):'--'}}
                              </div>
                          </td>
                          <!--<td>
                              <div :class="item.orderGoldPrice?'':'noData'" style="font-weight: 400;">
                                  {{item.orderGoldPrice/100||'--'}}
                              </div>
                          </td>-->
                          <td>
                              <div :class="item.orderMoney?'':'noData'" style="font-weight: 400;">
                                 {{item.orderMoney/100||'--'}}
                              </div>
                          </td>
                          <td>
                              <div class="opt">
                                  <a :href="item.contractViewUrl" target="_blank">预览</a>
                                  <a :href="item.contractDownUrl" target="_blank">下载</a>
                              </div>
                          </td>
                      </tr>
                      </tbody>
                  </table>
               </div>
            </div>
            <v-pagination :current="current" :size="size" :count="count"  :callback="changePage"></v-pagination>
        </v-content>
        <v-footer></v-footer>
        <v-alert :show="alertshow" @close="alert" >
        	<p>{{alertmsg}}</p>
        </v-alert>
    </div>
</template>
<script>
	
	import util from 'util'
	import { mapActions } from 'vuex'
	import { USER_SIGNOUT } from 'stores/user'
    export default {
        data() {
            return {
                current:1,
                start:0,
                size:8,
                count:1,
                isShowTips:false,//是否展示tips
                isShowType:false,//是否展示合同类型
                ruleList:[],//合同类型列表
                currentOrderKey:1,//当前合同类型id
                currentOrderText:'',// 当前合同类型名称
                orderList:'',
                alertshow:false,
                alertmsg:'',
                code:'',
            }
        },
         beforeCreate:function(){
		window.scrollTo(0,0);
	    },
        mounted(){
            var that=this;
            this.$http.post('/info/getTransTypeRuleList',{transType:'contractType'}).then(function(res){
                var result=res.data;
                if(result.code==='0000'){                  
                	that.ruleList=result.data.ruleList;
                	that.currentOrderKey=that.ruleList[0].ruleKey;
                	that.currentOrderText=that.ruleList[0].ruleValue;
                    
                } else if(result.code==='0003'){
                	that.alertmsg=result.msg;
        				 that.alertshow=true;
        				 that.code="0003"
                } else{
                	that.alertshow=true;
                	that.alertmsg=result.msg;
        			
                }
            })
        },
        watch:{
        	currentOrderKey(){
        		this.getOrderList();
        	},
           start(){
               this.getOrderList();
            }

        },
        methods: {
        	...mapActions([USER_SIGNOUT]),
        	getOrderList(){
        		var that=this;
        		this.$http.post('/info/findContractList',{start:this.start,size:this.size,orderType:this.currentOrderKey}).then(function(res){
        			var result=res.data;
        			if(result.code==='0000'){
        				that.orderList = result.data.orderList;
                        that.count = parseInt(result.data.count);
        			} else if(result.code==='0003'){
        				 that.alertmsg=result.msg;
        				 that.alertshow=true;
        				 that.code="0003"
        				 that.USER_SIGNOUT();
        				 
        			} else{
        				 that.alertmsg=result.msg;
        				 that.alertshow=true;
        			}
                    
                })
        	},
            changePage(page,start){
                this.current=page;
                this.start=start;
            },
            //打开tips
            whyQuery(){
                this.isShowTips = true;
            },
            //关闭tips
            closeQuery(){
                this.isShowTips = false;
            },
            //打开or关闭类型选择
            optType(){
                this.isShowType = !this.isShowType;
            },
            changeRule(key,value){
            	this.currentOrderKey=key;
            	this.currentOrderText=value;
            	this.isShowType=false;
            },
            alert(){
            	this.alertshow=false;
            	if(this.code==='0003'){
            		router.push('/login');
            	}
            	
            }
        }
    }
</script>