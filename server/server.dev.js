var path = require('path');
var webpack = require('webpack');
var express = require('express')
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var getConfig = require('./getConfig');
var i18n = require('./i18n/marmoym-i18n');

var app = express();
var config = require(getConfig(process.env.PLATFORM, process.env.NODE_ENV));
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    color: true
  },
}));

app.use(webpackHotMiddleware(compiler, {
  heartbeat: 2000
}));

app.get('/ss/i18n/:locale', function(req, res) {
  console.log('Returning i18n', req.params.locale);
  
  // todo: validation
  res.status(200)
    .send(i18n[req.params.locale]);
});

app.use('/', function (req, res) {
  var file = path.resolve(__dirname, '..', 'dist', 'index.html');
  res.sendFile(file);
});

// app.use('*', function (req, res, next) {
//   /**
//    * Serving index.html generated by HtmlWebpackPlugin was a bit hard,
//    * Found a solution here, 
//    * @see https://github.com/jantimon/html-webpack-plugin/issues/145#issuecomment-170554832
//    */
//   var filename = path.join(compiler.outputPath, 'index.html');
//   compiler.outputFileSystem.readFile(filename, function(err, result){
//     if (err) {
//       return next(err);
//     }
//     res.set('content-type','text/html');
//     res.send(result);
//     res.end();
//   });
// });

app.listen(3001, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3001/');
});