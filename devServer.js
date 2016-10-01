var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.examples');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: './examples/basic',
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});
