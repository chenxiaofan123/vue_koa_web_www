/**
 * Created by wanglin on 2017/3/6.
 */

const test={test:false};

/*获取金店信息*/
function* getStoreInfoList(){
    var that = this;
    let url = "server/info/getStoreInfoList";
    let postdata=Object.assign({});
    let result='';
    result = yield that.commonQuery.post(url,{});
    
    if(result.code==='0000'){
    	var arrlist=result.data.regionList;
    	if(arrlist.length>0){
    		arrlist.sort(function(a,b){
    		return a.storeList.length < b.storeList.length;
    	   })
    	}    	
    	
    }
    
    that.body=result;
}
/*
 *获取媒体报道列表页
 *start:
 *size:分页条数
 *
*/
function* getMediaInfoList(){
    var that  = this;
    let url="server/info/getMediaInfoList";
    let requestBody = that.request.body;
    let start = requestBody.start;
    let size = requestBody.size;
    that.body = yield that.commonQuery.post(url,{
        start,
        size
    });
}

/*
*公告列表页
*start:
*size:分页条数
* */
function* getNoticeInfoList(){
    var that = this;
    let url = "server/info/getNoticeInfoList";
    let requestBody = that.request.body;
    let start = requestBody.start;
    let size = requestBody.size;
    let searchCount=requestBody.searchCount||false;
    that.body = yield that.commonQuery.post(url,{
        start,
        size,
        searchCount
    });
}
/*
*
* 公告详情页
* noticeId:查询id
* */
function* getNoticeInfoDetail(){
    var that = this;
    let url = "server/info/getNoticeInfoDetail";
    let requestBody = that.request.body;
    let noticeId = requestBody.noticeId;
    that.body = yield that.commonQuery.post(url,{
        noticeId
    });
}
/*
* 黄金新闻列表页
* start:
* size:查询条数
* */
function* getHeadlinesList(){
    var that = this;
    let url = "server/info/getHeadlinesList";
    let requestBody = that.request.body;
    let start = requestBody.start;
    let size = requestBody.size;
    that.body = yield  that.commonQuery.post(url,{
        start,
        size
    });
}
/*
* 黄金新闻详情页
* mediaInfoId：查询id
* */
function* getHeadlinesDetail(){
    var that = this;
    let url = "server/info/getHeadlinesDetail";
    let requestBody = that.request.body;
    let headlinesId = requestBody.headlinesId;
    let result = yield that.commonQuery.post(url,{
        headlinesId
    });
    
    if(result.code==='0000'){
    	let content= JSON.parse(result.data.headlines.content);
    	result.data.headlines.content=content[0].content;
    	// 暂时去除 下面三条的数据
    	if(result.data.nextThreeList){
    		delete result.data.nextThreeList
    	}
    }
    
     that.body=result;
}
/*
*
* 名家专栏列表页
* start:
* size:查询条数
* */
function* getArticleList(){
    var that = this;
    let url = "server/info/getArticleList";
    let requestBody = that.request.body;
    let start = requestBody.start;
    let size = requestBody.size;
    that.body = yield  that.commonQuery.post(url,{
        start,
        size
    });
}
function* getArticleById(){
    var that = this;
    let url = "server/info/getArticleById";
    let requestBody = that.request.body;
    let id = requestBody.id;
    that.body = yield  that.commonQuery.post(url,{
        id
    });
}
/**
 * 获取首页置顶的三个产品信息
 * []
 * @yield {[type]} [description]
 */
function* getDepositPromotionList(){
    var that = this;
    let res1 = {};
    let res2 = {};
    let url1 = "server/info/getDepositPromotionList";
    let url2 = "server/info/getDepositInfoViewList";
    let requestBody = that.request.body;
    res1 = yield that.commonQuery.post(url1,{});
    res2 = yield that.commonQuery.post(url2,{});
    let resList1 = res1.data.depositPromotionList;
    let resList2 = res2.data.showList[0].showList;
    let resList={};
    for(i in resList2){
       if(resList2[i].depositType == 0){
           resList = new Array(resList2[i]);
       }
    }
    resList1.splice(1,0,resList[0])
    let depositPromotionList = resList1;
    that.body = {code:res2.code,data:{depositPromotionList}};

}
/**
 * 获取流动金信息
 * []
 * @yield {[type]} [description]
 */
function* getDepositInfoViewDetail(){
    var that = this;
    let url = "server/info/getDepositInfoViewDetail";
    let requestBody = that.request.body;
    let depositType = requestBody.depositType;
    let result = yield that.commonQuery.post(url,{
        depositType
    });
    that.body=result;
}
/*
 * 电子合同类型列表
 * transType：查询类型
 * */
function* getTransTypeRuleList(){
    var that = this;
    let url = "server/info/getTransTypeRuleList";
    let requestBody = that.request.body;
    var telephone = this.session.telephone;
    let transType = requestBody.transType;
    let result = yield that.commonQuery.post(url,{
        telephone,transType
    });
    that.body=result;
}
/**
 * 电子合同列表
 * @param telephone, start,orderType,size
 */

function * findList(){
    var telephone = this.session.telephone;
    var orderType = this.request.body.orderType;
    var start = this.request.body.start;
    var size = this.request.body.size;
    var url = 'order/findContractList'
    this.body = yield this.commonQuery.post(url, {
        telephone,
        orderType,
        start,
        size
    })
}


function* getMarketPriceAndTotal(){
    let url = "server/price/query/marketPrice";
    this.body = yield  this.commonQuery.post(url, {

    })
}

module.exports = {
    getStoreInfoList,
    getMediaInfoList,
    getNoticeInfoList,
    getNoticeInfoDetail,
    getHeadlinesList,
    getHeadlinesDetail,
    getArticleList,
    getArticleById,
    getDepositPromotionList,
    getDepositInfoViewDetail,
    getTransTypeRuleList,
    findList,
    getMarketPriceAndTotal
}