var router = require('koa-router')();
var userController = require('../../controller/userController');
module.exports = router.routes();
//router.prefix('/user');

router.post('/user/updateUserLogin', userController.updateUserLogin);
router.post('/user/checkPhoneNum', userController.checkPhoneNum);
router.post('/user/code', userController.getCode);
router.post('/user/getAuthCode', userController.getAuthCode);
router.post('/user/loginByValid', userController.loginByValid);
router.post('/user/logout', userController.logout);
router.post('/user/userRegisterByValid', userController.userRegisterByValid);