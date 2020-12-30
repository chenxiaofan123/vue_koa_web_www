import App from '../app'
import Login from '../pages/login/login'

const MediaList = () => import('../pages/mediareport/index.vue');
//import MediaList from '../pages/mediareport/' //媒体报道列表

const NoticeList = () => import('../pages/notice/index.vue');
//import NoticeList from '../pages/notice/' //公告列表

const NoticeDetail = () => import('../pages/notice/details.vue');
//import NoticeDetail from '../pages/notice/details' //公告列表详情页

const GoldNewsList = () => import('../pages/goldnews/index.vue');
//import GoldNewsList from '../pages/goldnews/' //黄金新闻列表

const GoldNewsDetail = () => import('../pages/goldnews/details.vue');
//import GoldNewsDetail from '../pages/goldnews/details' //黄金新闻详情页

const ArticleList = () => import('../pages/articlelist/index.vue');
//import ArticleList from '../pages/articlelist/' //名家专栏列表

const ArticleDetail = () => import('../pages/articlelist/details.vue');
//import ArticleDetail from '../pages/articlelist/details' //名家专栏详情页

const Newhand = () => import('../pages/newhand/index.vue');
//import Newhand from '../pages/newhand/'

const Insurance = () => import('../pages/insurance/index.vue');
//import Insurance from '../pages/insurance/' // 安全保障

const Legalpinion = () => import('../pages/insurance/legalopinion.vue');
//import Legalpinion from '../pages/insurance/legalopinion.vue' // 安全保障


//const Index = resolve => require(['../pages/index/'], resolve); // 异步加载

//import Deposit from '../pages/deposit/deposit' //存提金教程
const Deposit = () => import('../pages/deposit/deposit.vue');
import Index from '../pages/index/index.vue' //首页


import Reserverule from '../pages/deposit/reserverule'

import Video from '../pages/video/video' //存提金教程

import UserAgreement from '../pages/index/useragreement' //用户协议

import AboutUs from '../pages/aboutus/index'  //关于我们

import Charge from '../pages/charge/charge';  //充值
import ChargeResult from '../pages/charge/chargeResult.vue';

import EleContract from '../pages/eleContract/eleContract'
//import Goldprice from '../pages/goldprice/index'  //金价走势页
const Goldprice = () => import('../pages/goldprice/');

import chargeCallback from '../pages/charge/chargeCallback.vue';

/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                meta: {auth: false},
                component: Index
            },
            {
                path: '/login', // 登录
                meta: {auth: false},
                component: Login
            },
            {
                path: '/medialist',
                meta: {auth: false},
                component: MediaList
            },
            {
                path: '/noticelist',
                meta: {auth: false},
                component: NoticeList
            },
            {
                path: '/noticedetails/:id',
                meta: {auth: false},
                component: NoticeDetail
            },
            {
                path: '/goldnews',
                meta: {auth: false},
                component: GoldNewsList
            },
            {
                path: '/goldnewsdetails/:id',
                meta: {auth: false},
                component: GoldNewsDetail
            },
            {
                path: '/article',
                meta: {auth: false},
                component: ArticleList
            },
            {
                path: '/articledetails/:id',
                meta: {auth: false},
                component: ArticleDetail
            },
            {
                path: '/newhand',
                meta: {auth: false},
                component: Newhand
            }
            ,
            {
                path: '/useragreement',
                meta: {auth: false},
                component: UserAgreement
            }
            ,
            {
                path: '/insurance',
                meta: {auth: false},
                component: Insurance
            }
            ,
            {
                path: '/legal',
                meta: {auth: false},
                component: Legalpinion
            },
            {
                path: '/about',
                meta: {auth: false},
                component: AboutUs
            },
            {
                path: '/deposit',
                meta: {auth: false},
                component: Deposit
            },
            {
                path: '/video/:id',
                meta: {auth: false},
                component: Video
            },
            {
                path: '/reserverule',
                meta: {auth: false},
                component: Reserverule
            },
            {
                path: '/goldprice',
                meta: {auth: false},
                component: Goldprice
            },
            {
                path: 'charge',
                meta: {
                    auth: true
                },
                component: Charge
            },
            {
                path: 'chargeResult',
                meta: {
                    auth: true
                },
                component: ChargeResult
            },

            {
                path: '/eleContract',
                meta: {auth: true},
                component: EleContract
            }, {
                path: '/trade/tradeRechargeSuccess',
                meta:{ auth: false},
                component:chargeCallback
            }
        ]
    }
]
