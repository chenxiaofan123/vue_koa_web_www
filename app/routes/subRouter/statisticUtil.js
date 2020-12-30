var router = require('koa-router')();
module.exports = router.routes();
router.get('/getSessionId', function*(){
    this.body = {
        sessionId: this.sessionId
    }
})