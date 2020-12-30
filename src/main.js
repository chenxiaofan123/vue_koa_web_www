import './less/reset.less'
import 'flex.css'
// import './iconfont/iconfont.css'
import 'github-markdown-css'
import './css/common.css'
import './less/common.less'

import Promise from 'es6-promise';
if (!window.Promise) {
    window.Promise = Promise;
}

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import stores from './stores/'
import * as filters from './filters/'
import directives from './directive/'
import components from './components/' // 加载公共组件


import configs from 'configs'
import Axios from 'axios';
import VueAxios from 'vue-axios';
import util from 'util';
import Url from 'baseurl';
import('./libs/pageVisibility');

//highchart图表
import Highcharts from 'highcharts/highstock';
import VueHighcharts from 'vue-highcharts';

Vue.use(VueHighcharts, { Highcharts });

//fastclick事件
const FastClick = require('fastclick')
FastClick.attach(document.body)

Axios.defaults.baseURL = Url.baseurl;
Axios.defaults.method = 'post';
var timer;
//Axios.interceptors.request.use(function (request) {
//
//  //金价接口不展示loading
////  var isPrice = /info\/price/.test(request.url);
////  if (!isPrice) {
////    stores.dispatch('setLoadingState', true)
////  };
//
//  return request;
//},
//function (error) {
//  // Do something with request error
//  return Promise.reject(error);
//})

//添加响应拦截器
Axios.interceptors.response.use(function (response) {
  //对响应数据做些事
  //stores.dispatch('setLoadingState', false);
  var data = response.data;
  if (data.code === '0002'||data.code === '0003') {
    //未登录
    //var interfaceurl = response.config.url;
    stores.dispatch('USER_SIGNOUT');
    router.push('/login');
    return Promise.reject()
  }
  return response;
}, function (error) {
  //请求错误时做些事
  return Promise.reject(error);
});

Vue.prototype.baseurl = Url.baseurl;
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})
//Vue.component('echarts', Echarts);
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) // 注册过滤器
Object.keys(directives).forEach(k => Vue.directive(k, directives[k])) // 注册指令
Vue.use(VueRouter)


/*
 * 全局引入axios
 * 可以使用vm.$http调用
 * */
Vue.use(VueAxios, Axios);

const router = new VueRouter({
    mode:'history',
    routes
})
global.router = router;
router.beforeEach(({meta,path}, from, next) => {
  const {auth = false} = meta
  const isLogin = Boolean(stores.state.user.telephone) // true用户已登录， false用户未登录
  if (auth && !isLogin && path !== '/login') {
  	var prepath=path.substring(1);
    let to = {
      path: '/login?pre='+prepath
    }
    return next(to)
  }
  next()
})

//Vue.mixin({
//	beforeCreate:function(){
//		window.scrollTo(0,0);
//	},
//	mounted:function(){
//     
//	}
//})

new Vue({
  store: stores,
  router
}).$mount('#app');


