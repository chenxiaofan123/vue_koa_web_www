<style lang="less" scoped>
    @import "../../less/config";
    .aboutus-div{
    .nav{
        width:100%;
        background:#fafafc;
        height:60px;
        line-height: 60px;
        position:fixed;
        top:80px;
        z-index:100;

    li{
    .fl();
        font-size:16px;
        color:#a0a0a0;
    &:not(:last-child)::after{
         content:'';
         display:inline-block;
         width:4px;
         height:4px;
         border-radius:100%;
         margin:0 10px;
         background:#d8d8d8;
         margin-bottom: 2px;
     }
    &:hover{
         cursor: pointer;
         color:#333333;
     }
    &.active{
         color:#333333;
        .fontLight;
     }
    }
    }
    
    .con{
    	padding-top:60px;
    	padding-bottom:40px;
    }
    .intro{
       margin-top:100px;
       &:after{
        content:'';
        height:0;
        display: block;
        clear: both;
        }
        div:first-child{
            background-image: url('hjqb-left.png');
            background-repeat: no-repeat;
            width:650px;
            height:432px;
            background-size: 100% 100%;
            float:left;
        }
        div:last-child{
            float:right;
            width:520px;
            p{
                line-height: 1.5;
                font-size:16px;
                color:#333333;
                &:not(:first-child){
                    margin-top:20px;
                 }
            }
        }
    }
    .goldTeam{
       &:after{
         content:'';
         height:0;
         display: block;
         clear: both;
       }
        &>div{
           width:300px;
           text-align:center;
           float:left;
              margin-right:160px;
          div{
              width:184px;
              height:214px;
              background-repeat: 100% 100%;
              margin:0 auto;
              margin-top:100px;
          }
          p:nth-child(2){
              font-size:20px;
              color:#333333;
              margin-top:40px;
          }
         p:nth-child(3){
             font-size:16px;
             color:#a0a0a0;
             margin-top:19px;
             line-height: 1.5;

          }
           &:first-child{
              div{
                  background-image: url('header-Alston.png');
              }
            }
            &:nth-child(2){
              div{
                  background-image: url('header-zj.png');
                }
           }
           &:nth-child(3){
            margin-right:0;
             div{
                  background-image: url('header-lx.png');
               }
          }
          &:nth-child(4){
             div{
                  background-image: url('header-yj.png');
             }
           }
          &:nth-child(5){
             div{
                 background-image: url('header-wjj.png');
           }
    }


    }

    }
    .expert{
    &>div{
          margin-right:70px;
    &:first-child{
     margin-left:60px;
    div{
        background-image: url('header-sal.png');
    }
    }
    &:nth-child(2){
    div{
        background-image: url('header-jnc.png');
    }
    }
    &:nth-child(3){
         margin-right:0;
    div{
        background-image: url('header-zz.png');
    }
    }


    }
    }
    .callUs{
        .map{
            position:relative;
        img{
            display: block;
        }
           .ads{
               height:100%;
               position:absolute;
               top:0;
               left:50%;
               transform: translateX(-50%);
               div{
                   position:absolute;
                   top:48%;
                   left:48%;
                   background:rgba(51,51,51,0.80);
                   border-radius:4px;
                   width:438px;
                   height:52px;
                   line-height: 52px;
                   text-align: center;
                   font-size:20px;
                   color:#ffffff;
               }

           }
        }
    .callUs-div{
        ul{
        &:after{
             content:'';
             height:0;
             display: block;
             clear: both;
         }
            li{
                float:left;
                margin-top:100px;
                width:300px;
                margin-right:106px;
                .title{
                    font-size:20px;
                    color:#333333;
                    padding-bottom:19px;
                    border-bottom:1px solid #e6e6e6;
                    display: inline-block;
                }
                .callUs-content{
                    margin-top:20px;
                    font-size:16px;
                    color:#333333;
                    span{
                        color:#a0a0a0;
                    }
                    p:nth-child(2){
                        margin-top:10px;
                    }
                }
            }
            &:nth-child(2){
               li:not(:nth-child(2)){
                   .callUs-content{
                       p:nth-child(2){
                           font-size:14px;
                           color:#a0a0a0;
                       }
                   }
               }
             }
        }
    }
    }
    }
</style>
<template>
    <div class="aboutus-div">
        <v-header :activeindex="4"></v-header>
        <v-content>
            <div class="nav">
                <ul class="row clearfix">
                    <li @click="tab(0)" :class="{active:show[0]}">公司介绍</li>
                    <li @click="tab(1)" :class="{active:show[1]}">黄金团队</li>
                    <li @click="tab(2)" :class="{active:show[2]}">黄金顾问</li>
                    <li @click="tab(3)" :class="{active:show[3]}">联系我们</li>
                </ul>
            </div>
            <div class="con">
            <!--公司介绍-->
            <div class="intro row" v-show="show[0]">
                <div></div>
                <div>
                    <p>
                        黄金钱包是顶级风投软银中国投资的互联网黄金投资、消费平台，目前同时上线App和网页端（www.g-banker.com）服务，为普通消费者和投资者提供“低价买黄金”、“存金生息”和“黄金结构化产品”等一站式服务，价格实时直通上海黄金交易所，最低买入或卖出单位为1毫克。
                    </p>
                    <p>
                        黄金钱包A、B轮融资由软银中国（全球最大VC投资机构，阿里巴巴、分众传媒的主要投资方）领投，C轮融资由中银国际旗下基金渤海中盛领投，光大控股旗下光控众盈资本、顶级风投软银中国以及香港新晋明星资本慧科资本跟投。
                    </p>
                    <p>
                        打通个人黄金存量和用金企业需求，黄金钱包帮助用户资产日日生息，另外由于门槛极低、界面友好、操作便捷、及时性强，极大地拉近了投资者和消费者与黄金的距离。
                    </p>
                    <p>
                        目前黄金钱包正努力拓展线下的存金与提金业务，在北京、江苏、四川、广东、山东等地拥有近50家线下合作金店。
                    </p>
                    <p>
                        黄金钱包目前是中国黄金协会常务理事单位，是该协会内同类企业中最高级别的公司。
                    </p>
                </div>
            </div>
            <!--黄金团队-->
            <div class="goldTeam row" v-show="show[1]">
                <div>
                    <div></div>
                    <p>杨㟀罡   董事长/创始人</p>
                    <p>毕业于北京大学光华管理学院曾任职摩根士丹利(Morgan Stanley) IBD部门，东方花旗证券投资银行部副总监</p>
                </div>
                <div>
                    <div></div>
                    <p>张晶   联合创始人</p>
                    <p>毕业于北京大学光华管理学院，曾任韬睿惠悦(Towers Watson)咨询顾问Kissrice.com CEO</p>
                </div>
                <div>
                    <div></div>
                    <p>罗茜   联合创始人/投资顾问</p>
                    <p>毕业于香港科技大学、英国伦敦政治经济学院，曾任职于花旗银行、汇丰银行风控部门，广东盈瀚投资有限公司创始人 CEO</p>
                </div>
                <div>
                    <div></div>
                    <p>于杰   联合创始人/风控顾问</p>
                    <p>现任某私募基金公司CTA基金经理，注册金融理财师、上海黄金交易所注册交易员，注册企业风险管理师、国家高级数据分析师</p>
                </div>
                <div>
                    <div></div>
                    <p>王俊杰   财务总监</p>
                    <p>毕业于北京大学光华管理学院，持有CICPA（中国注册会计师）资质，曾就职德勤华永会计师事务所，8年上市公司及IPO审计经验</p>
                </div>
            </div>
            <!--专家顾问-->
            <div class="goldTeam expert row" v-show="show[2]">
                <div>
                    <div></div>
                    <p>宋安澜</p>
                    <p>软银中国创业投资有限公司合伙人，具有创业和投资方面的丰富经验，并在高科技领域里有渊博知识 拥有清华大学自动化系的学士学位和硕士学位及清华大学管理学院的博士学位。于2000年1月份加盟软银，主要工作包括投资评估、投资管理和战略规划</p>
                </div>
                <div>
                    <div></div>
                    <p>江南春</p>
                    <p>分众传媒首席执行官兼董事局主席。华东师范大学中文系毕业，2003年创办分众传媒，颠覆了人们传统的媒体观，是中国提出生活圈媒体理念第一人。2007年12月24日，分众传媒正式被计入纳斯达克100指数，成为第一个被计入纳斯达克100指数的中国广告传媒股</p>
                </div>
                <div>
                    <div></div>
                    <p>张铮</p>
                    <p>北京大学光华管理学院金融学副教授。毕业于南开大学，获应用数学学士学位。研究领域主要集中在证券投资、风险管理和行为金融</p>
                </div>
            </div>
            <!--联系我们-->
            <div class="callUs"  v-show="show[3]">
                <a href="http://map.baidu.com/?newmap=1&amp;ie=utf-8&amp;s=s%26wd%3D%E6%9C%9B%E4%BA%AC%E6%B5%A6%E9%A1%B9%E4%B8%AD%E5%BF%83" target="_blank">
                    <div class="map">
                        <img src="./map.png" width="100%"/>
                        <div class="row ads">
                            <div>公司地址：北京市朝阳区望京浦项中心B座</div>
                        </div>
                    </div>
                </a>

                <div class="row callUs-div">
                    <ul>
                        <li>
                            <div class="title">市场及企业合作</div>
                            <div class="callUs-content">
                                <p><span>合作邮箱：</span>bd@g-banker.com</p>
                            </div>
                        </li>
                        <li>
                            <div class="title">媒体采访</div>
                            <div class="callUs-content">
                                <p><span>电话：</span>010-5949-3465</p>
                                <p><span>邮箱：</span>pr@g-banker.com</p>
                            </div>
                        </li>
                        <li>
                            <div class="title">我要借金</div>
                            <div class="callUs-content">
                                <p><span>邮箱：</span>goldlease@huangjinqianbao.com</p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div class="title">客服热线</div>
                            <div class="callUs-content">
                                <p>4000-339-993</p>
                                <p>工作日 9:00-21:00  非工作日 10:00-15:00</p>
                            </div>
                        </li>
                        <li>
                            <div class="title">客户服务</div>
                            <div class="callUs-content">
                                <p><span>客服QQ：</span>550489306</p>
                                <p><span>客服邮箱：</span>service@g-banker.com</p>
                            </div>
                        </li>
                        <li>
                            <div class="title">加入我们</div>
                            <div class="callUs-content">
                                <p><span>邮箱：</span>hr@huangjinqianbao.com</p>
                                <p>欢迎投递简历（主题为求职+姓名+职位）</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    export default{
        data(){
            return {show:[true,false,false,false]}
        },
        beforeCreate:function(){
		window.scrollTo(0,0);
	    },
        methods:{
            tab(i){
                if(this.show[i]){
                    return;
                }
                this.show=[false,false,false,false];
                this.show[i]=true;
                window.scrollTo(0,0);
            }
        }
    }
</script>