export const formatDate = (str) => {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}

export const formatNum = (num) => {
  var numStr = num + '';
  if(!numStr || numStr.length <= 4) return numStr;
  //去掉所有空格
  numStr = numStr.replace(/(\s)/g, '');
  numStr = numStr.replace(/(\d{4}?)/g, '$& ');
  return numStr;
}

export const formatMoney = (num) =>{
  var realNum = parseInt(num) ||0;
  if(typeof(realNum) !== 'number' || realNum === 0) return 0.00;
  var numStr = realNum+'';
  //空字符串
  if(numStr.length === 0) return 0.00;
  if(numStr.length == 1) return '0.0' +numStr;
  if(numStr.length == 2) return '0.' +numStr;
  //如果长度大于2位
  return numStr.replace(/(\d+)(\d{2})$/,'$1.$2');
}

export const formatWeight = (num) =>{
  var realNum = parseInt(num);
  if(typeof(realNum) !== 'number' || realNum === 0) return 0;
  var numStr = realNum+'';
  //空字符串
  if(numStr.length === 0) return 0;
  if(numStr.length == 1) return '0.00' +numStr;
  if(numStr.length == 2) return '0.0' +numStr;
  if(numStr.length == 3) return '0.' +numStr;
  //如果长度大于2位
  return numStr.replace(/(\d+)(\d{3})$/,'$1.$2');
}
export const formatTime = (value) =>{
	  if(typeof value == 'string'){
	  	return value.split(' ')[0];
	  } else{
	  	return value
	  }
    
}