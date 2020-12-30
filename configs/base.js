// module.exports = {
//     target: '', // api请求的目标网站
//     base: '', // 路由根路径
//     publicPath: 'http://localhost:3400/static/', // 程序文件在服务器所在的路径
//     title: '黄金钱包'
// }

function config(param) {
    //根据不同的环境来设置publicPath
    var result = {};
    switch (param) {
        case 'dev':
            result = {
            	dest: './web/',
                target: '', // api请求的目标网站
                base: '', // 路由根路径
                publicPath: 'http://localhost:3400/static/',
                title: '黄金钱包'
            }
            break;
            case 'debug':
             result = {
            	dest: './web/',
                target: '', // api请求的目标网站
                base: '', // 路由根路径
                publicPath: 'http://localhost:4100/static/',
                title: '黄金钱包'
            };
            break;
            case 'test':
            result={
            	dest: './web/',
                target: '', // api请求的目标网站
                base: '', // 路由根路径
                publicPath: 'https://dev.huangjinqianbao.com/GBankerWebNew/static/',
                title: '黄金钱包'
            }
            break;
            case 'production':
            result={
            	dest: './web/',
                target: '', // api请求的目标网站
                base: '', // 路由根路径
                publicPath: 'https://static02.huangjinqianbao.com/GBankerWeb/static/',
                title: '黄金钱包'
            }
            break;
           default:
             result = {
             	dest: './web/',
                target: '', // api请求的目标网站
                base: '', // 路由根路径
                publicPath: './static/',
                title: '黄金钱包'
            }
            break;
    }

    return result;
}
module.exports=config;
