var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index'
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
