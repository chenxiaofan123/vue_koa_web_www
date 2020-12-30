const path = require('path')
const configsF = require('./configs/base')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin');

const extract = new ExtractTextPlugin('css/[name].[hash].css')
const autoprefixer = require('autoprefixer')({ browsers: [ "ie >= 9",
  "ie_mob >= 9",
  "ff >= 26",
  "chrome >= 30",
  "safari >= 6",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.0",
  "bb >= 10",] })

let hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
const IS_ENV = process.env.NODE_ENV == 'online'

const nodeenv = process.env.NODE_ENV;
const configs = configsF(nodeenv);
console.log(configs);
// 获取当前运行的模式
var currentTarget = process.env.npm_lifecycle_event;

var debug; //是否调试
var minimize; //是否压缩
var baseurl; // 域名地址
var devtool;
var entrymain = ['babel-polyfill', './src/main.js'];
if(nodeenv == 'dev') {
    debug = true;
    minimize = false;
    devtool = '#eval-source-map';
    baseurl = path.resolve(__dirname, 'configs/devurl.js');
    entrymain = ['babel-polyfill', './src/main.js', hotMiddlewareScript];
    successPath = '/GBankerWeb'

} else if(nodeenv == 'debug') {
    debug = true;
    minimize = false;
    devtool = '#eval-source-map';
    baseurl = path.resolve(__dirname, 'configs/devurl.js');
    successPath = '/GBankerWeb'
} else if(nodeenv == 'test') {
    debug = false;
    minimize = true;
    //devtool = "#eval-source-map";
     devtool = false;
    baseurl = path.resolve(__dirname, 'configs/testurl.js');
    successPath = '/GBankerWeb'
} else if(nodeenv == 'production') {
    debug = false;
    minimize = true;
    devtool = false;
    baseurl = path.resolve(__dirname, 'configs/produrl.js');
    successPath = ''
}
const plugins = []
if(nodeenv=='production') {
	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}))
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		sourceMap: true
	}))
} else if( nodeenv=='dev'){
	plugins.push(new webpack.HotModuleReplacementPlugin());
	plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = {
		target: 'web',
		entry: {
			main: entrymain			
		},
		output: {
			filename: debug ? 'js/[name].js' : 'js/[name].[chunkhash].js?[chunkhash]',
			path: path.resolve(__dirname, `${configs.dest}static`),
			chunkFilename: 'chunk[id].js?[chunkhash]',
			publicPath: configs.publicPath

		},
		module: {
			rules: [{
					test: /\.js$/,
					use: ['babel-loader']
				},
				{
					test: /\.vue$/,
					use: [{
							loader: 'vue-loader',
							options: {
								loaders: {
									css: ExtractTextPlugin.extract({
										use: ['css-loader'],
										fallback: 'vue-style-loader',
                                        publicPath: configs.publicPath
									}),
									less: ExtractTextPlugin.extract({
										use: ['css-loader', 'less-loader'],
										fallback: 'vue-style-loader',
										publicPath: configs.publicPath
									})
								},
								postcss: [autoprefixer]
							}
						}
						// 'eslint-loader'
					]
				},
				{
					test: /\.css$/,
					use: extract.extract([
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [autoprefixer]
							}
						}
					])
				},
				{
					test: /\.less$/,
					use: extract.extract([
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [autoprefixer]
							}
						},
						'less-loader'
					])
				},
				// {
				// 	test: /\.(eot|woff|svg|ttf|woff2|otf)(\?|$)/,
				// 	use: [{
				// 		loader: 'file-loader',
				// 		options: {
				// 			name: 'iconfont/[name].[hash].[ext]'
				// 		}
				// 	}]
				// },
				{
					test: /\.(png|jpg|gif|eot|woff|svg|ttf|woff2|otf)$/,
					use: [{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'images/[name].[hash].[ext]'
						}
					}]
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(['web'], {
				root: '',
				verbose: true,
				dry: false,
				exclude: []
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src/template/index.html'),
				filename: '../index.html',
				title: configs.title,
				hash: minimize ? true : false,
				favicon:'src/assets/favicon.ico',
				inject:true,
				minify: minimize ? {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true
				} : {
					removeComments: false,
					collapseWhitespace: false,
					removeAttributeQuotes: false
				}
			}),
//			new webpack.HotModuleReplacementPlugin(),
//			new webpack.NoEmitOnErrorsPlugin(),
			//new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'./js/vendors.[hash].js'}),
	new webpack.ProvidePlugin({
		jQuery: "jquery",
		$: "jquery"
	}),
	extract
].concat(plugins),
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'configs$': path.resolve(__dirname, 'configs/base.js'), //程序的一些基本配置
			'util$': path.resolve(__dirname, 'src/util/index.js'), //常用工具方法
			'is-seeing$': path.resolve(__dirname, 'src/util/is-seeing.js'),
			'pull-list$': path.resolve(__dirname, 'src/mixins/pull-list.js'), //拉取列表
			'route-data$': path.resolve(__dirname, 'src/libs/route-data/index.js'), //页面数据缓存
			'stores': path.resolve(__dirname, 'src/stores/'), //常用工具方法
			'@': path.resolve(__dirname, 'src/pages'),
			'baseurl': baseurl
		},
		extensions: ['.js', '.vue', '.json']
	},
	devtool: devtool
}