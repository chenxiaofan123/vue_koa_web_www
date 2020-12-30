/**
 * Created by wanglin on 2017/3/6.
 */
var price=0;
var dateTime=new Date();
function* query(){
    let url = "server/price/query";
    let requestBody = this.request.body;
    let queryFlag = requestBody.queryFlag;  //3 是实时金价  0 1 2 是 30天 7天 24小时 数据
    
    if(queryFlag!=3){   	
    	this.body=yield this.commonQuery.post(url,{
        queryFlag
        });
        return;
    }
    var curr=new Date();
    var priceobj='';
    if(curr-dateTime>10000||price==0){ 
    	priceobj=yield this.commonQuery.post(url,{
        queryFlag
        });
        price=priceobj.data.realtime_price;
        dateTime=curr;
        this.body=priceobj;    
    } else{    	   	
    	this.body={
    		code:'0000',
    		success:'true',
    		data:{
    			realtime_price:price
    		}
    	}
    }  
}

function* marketPrice(){
    let url = "server/price/query/marketPrice";
    this.body = yield this.commonQuery.post(url,{});
}
module.exports = {
    query,
    marketPrice
}