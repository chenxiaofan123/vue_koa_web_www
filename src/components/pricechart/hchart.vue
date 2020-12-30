<style lang="less" scoped>
	@import "../../less/config";
	.hchart {
		width: 100%;
		height: 400px;
	}
</style>

<template>
	<div>
		<highstock class="hchart" :style="styleObj" :options="options"></highstock>
	</div>
</template>
<script>
	import $ from 'jquery'
	import HighCharts from 'highcharts'
	Date.prototype.format = function(format) {
		/*
		 * eg:format="YYYY-MM-dd hh:mm:ss";
		 */
		var o = {
			"M+": this.getMonth() + 1, //month
			"d+": this.getDate(), //day
			"h+": this.getHours(), //hour
			"m+": this.getMinutes(), //minute
			"s+": this.getSeconds(), //second
			"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
			"S": this.getMilliseconds() //millisecond
		}

		if(/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}

		for(var k in o) {
			if(new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	}
	export default {
		data() {
			return {
				options: {}
			}
		},
		props:{
			queryFlag:{
				type:Number,
				default:2
			},
			styleObj:{
				type:Object,
				default:function(){
					return {
						width:'100%',
					    height:'400px'
					}
					
				}
			}
		},
		watch:{
			queryFlag(){
				this.getdata();
			}
		},
		methods: {
			getdata() {
				var that = this;
				var _queryFlag = this.queryFlag;
				this.$http.post('/price/query', { queryFlag: _queryFlag }).then(function(res) {
					var data = res.data;
					if(data.code === '0000') {
						var _d = [];
						var _data = data.data;
						for(var j = 0; j < _data.priceArray.length; j++) {
							var date=_data.priceArray[j].date.replace(/\-/g,'\/');
							_d.push([new Date(date).getTime(), parseFloat(_data.priceArray[j].price / 100)]);
						}
						var _tickInterval, _fmt, _ordinal, _min, _max, _showFmt;
						if(_queryFlag == 0) {
							// 30天
							_tickInterval = 7 * 24;
							_fmt = "dd日";
							_showFmt = '';
							_ordinal = true;
							_min = null;
							_max = null;
						} else if(_queryFlag == 1) {
							// 7天
							_tickInterval = 24;
							_fmt = "dd日";
							_ordinal = true;
							_min = null;
							_max = null;
						} else if(_queryFlag == 2) {
							// 小时
							_tickInterval = 6;
							_fmt = "hh:mm";
							_ordinal = false;
							_min = new Date(_d[_d.length - 1][0]).setHours(0, 0, 0, 0);
							_max = new Date(_d[_d.length - 1][0] + 1 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0);
						}

						that.options = {
							chart: {
								type: 'line'
								/*width:380*/
							},
							credits: {
								enabled: false
							},
							rangeSelector: {
								enabled: false
							},
							colors: ['#ff701a'],
							series: [{
								name: "金价",
								//type: 'line',
								type: 'area',
								data: _d,
								threshold: null,
								tooltip: {
									valueDecimals: 2
								},
								fillColor: {
									linearGradient: {
										x1: 0,
										y1: 0,
										x2: 0,
										y2: 1
									},
									stops: [
										[0, "#ffe5d6"],
										[1, HighCharts.Color("#ffe5d6").setOpacity(0).get('rgba')]
									]
								}

							}],
							//控制线的宽度
							plotOptions: {
								area: {
									lineWidth: 1,
									states: {
										hover: {
											lineWidth: 1
										}
									}
								}

							},
							tooltip: {
								formatter: function() {

									var _fmt = '<span style="font-family:Helvetica;font-size:14px;">' + this.y.toFixed(2) + '元/克</span><br/>';
									_fmt += '<span style="font-size: 14px;color:#a3a3a3;font-family:Helvetica;">' + new Date(this.x).format("yyyy-MM-dd hh:mm") + '</span>';
									return _fmt;
								}
							},
							navigator: {
								enabled: false
							},
							scrollbar: {
								enabled: false
							},
							legend: {
								enabled: false
							},
							exporting: {
								enabled: false
							},
							xAxis: {
								tickInterval: _tickInterval * 3600 * 1000,
								labels: {
									formatter: function(p) {
										//var date=this.value.replace(/\-/g,'\/');
										var vDate = new Date(this.value);
										return vDate.format(_fmt);

									},
									align: 'center',
									style: {
										'fontSize': '16px',
										'fontFamily':'Helvetica'

									}
								},
								ordinal: _ordinal,
								min: _min,
								max: _max
							},
							yAxis: {
								opposite: false,
								labels:{
									style:{
										'fontFamily':'Helvetica',
										'fontSize':'16px'
									}
								}
							}
						};
					}
				})
			}
		},
		mounted() {
			this.getdata();
		}
	}
</script>