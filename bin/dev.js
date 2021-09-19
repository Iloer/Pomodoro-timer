const webpack = require('webpack')
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const webpacDevMiddleware = require('webpack-dev-middleware')
const webpacHotMiddleware = require('webpack-hot-middleware')
const express = require('express')

const hmpServer = express()
const clientCompiler = webpack(webpackClientConfig)

hmpServer.use(webpacDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRenter: true,
  noInfo: true,
  watchOptions: {
    ignore: '/dist/',
  },
  writeToDisk: true,
  stats: 'errors-only'
}))

hmpServer.use(webpacHotMiddleware(clientCompiler, {
  path: '/static/_webpack_hmr',  
}))

hmpServer.listen(3001, () => {
  console.log('HMR server successfuly started')
})

const compiler = webpack(webpackServerConfig);

compiler.run((err) => {
  if (err){
    console.log('Compilation failed', err)
  }

  compiler.watch({}, (er) => {
    if (er){
      console.log('Compilation failed', er)
    }
  })
  
  console.log('Compile was successfully')
  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client')
    ]
  })
});