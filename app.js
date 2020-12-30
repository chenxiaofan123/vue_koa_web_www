const nodeenv=process.env.NODE_ENV; 
console.log(nodeenv);
const configs = require('./configs/base')(nodeenv)
const webpack = require('webpack')
const koa     = require('koa')
const express = require('express')
const webpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(webpackConfig)

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: 'minimal'
})

app.use(require('connect-history-api-fallback')({
  index: `${configs.publicPath}../index.html`
}))
app.use(devMiddleware)

app.use(hotMiddleware)

app.listen(3400, (err) => {
  if (err) return console.log(err)
  console.log('http://localhost:3400/')
})