const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(process.cwd(),"dist"),
        filename:'[name].[chunkHash:8].js'
    }, 
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack',
            template:'public/index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    }
}