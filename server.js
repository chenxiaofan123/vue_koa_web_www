
const koa  = require('koa')
const cors=require('koa-cors')
const bodyParse = require('koa-better-body');

const router=require('./app/routes/router');
const  commonQuery = require('./app/utils/commonPost');
const  path = require('path'),
    json = require('koa-json'), 
    logger = require('koa-logger'),
    session=require('koa-session-redis'),
    statics=require('koa-static'); // 静态文件
const exceptProUtil = require('./app/utils/exceptProUtil');

const app = koa();

//初始化全局变量

require('./app/utils/global');

app.use(require('koa-bodyparser')());
// app.use(bodyParse({
//     multipart: true
// }))
app.use(json());
app.use(logger());

//设置session
app.keys = ['koawww'];
var store;
store = {
    host: GLOBAL_REDISHOST,
    port: GLOBAL_REDISPORT,
    options: {
        auth_pass: GLOBAL_REDISPASS
    },
    db: 3,
    ttl: 60 * 30 * 1//单位为秒,设置过期为1天
};
app.use(session({
    store:store,
    key:'jssessionid'
}));
//建立会话
app.use(function*(next){
    var n = this.session.views ||0;
    this.session.views  = n ++;
    yield *next;
})
app.use(cors());

//全局异常处理

app.use(exceptProUtil);
app.use(commonQuery());
// mount root routes  
app.use(router);
app.use(require('koa-history-api-fallback')({
    index: '/index.html'
}))
// 添加静态文件
app.use(statics(__dirname+'/web/'));

app.on('error', function(err, ctx){
  //logger.error('server error', err, ctx);
});




  
module.exports = app;



