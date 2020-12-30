 // 全局环境

module.exports = {};
global.GLOBAL_SERVERHOST = 'https://devapi.huangjinqianbao.com';
global.GLOBAL_SERVERHOST2 = 'https://devapi.huangjinqianbao.com';
if(process.env.env == 'production'){
    global.GLOBAL_SERVERHOST = 'http://internal-api.huangjinqianbao.com';
    global.GLOBAL_SERVERHOST2 = 'http://internal-api.huangjinqianbao.com';
}else if(process.env.env == 'test'){
    global.GLOBAL_SERVERHOST = 'https://devapi.huangjinqianbao.com';
    global.GLOBAL_SERVERHOST2 = 'https://devapi.huangjinqianbao.com';
}else{
    global.GLOBAL_SERVERHOST = 'https://devapi.huangjinqianbao.com';
    global.GLOBAL_SERVERHOST2 = 'https://devapi.huangjinqianbao.com';
}
global.GLOBAL_REDISHOST = process.env.env == 'production'?'727fd4bc071e436b.m.cnhzfb.kvstore.aliyuncs.com':'462e2bd1f68542db.m.cnbja.kvstore.aliyuncs.com';
global.GLOBAL_REDISPASS = process.env.env == 'production'?'Ou2LRLK69ylh0zAt':'462e2bd1f68542db:23weSD06tgJOIRMJtewrk95r4';
global.GLOBAL_REDISPORT = '6379';

global.RADIS_STORE = {
    host: GLOBAL_REDISHOST,
    port: GLOBAL_REDISPORT,
    options: {
        auth_pass: GLOBAL_REDISPASS
    },
    db: 3,
    ttl: 60 * 60 * 24//单位为秒,设置过期为1天
};