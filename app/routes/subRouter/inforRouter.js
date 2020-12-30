/**
 * Created by wanglin on 2017/3/6.
 */
var router = require('koa-router')();
var inforController = require("../../controller/inforController");
module.exports = router.routes();
router.prefix('/info');
/*获取金店信息*/
router.post('/getStoreInfoList', inforController.getStoreInfoList);
/*
 *获取媒体报道列表页
 *start:
 *size:分页条数
 *
*/
router.post('/getMediaInfoList', inforController.getMediaInfoList);
router.post('/getNoticeInfoList', inforController.getNoticeInfoList);
router.post('/getNoticeInfoDetail', inforController.getNoticeInfoDetail);
router.post('/getHeadlinesList', inforController.getHeadlinesList);
router.post('/getHeadlinesDetail', inforController.getHeadlinesDetail);
router.post('/getArticleList', inforController.getArticleList);
router.post('/getArticleById', inforController.getArticleById);
router.get('/getMarketPriceAndTotal',inforController.getMarketPriceAndTotal)

//获取首页置顶三个产品信息

router.post('/getDepositPromotionList', inforController.getDepositPromotionList);
//获取电子合同类型列表
router.post('/getTransTypeRuleList', inforController.getTransTypeRuleList);
//获取电子合同列表
router.post('/findContractList', inforController.findList);