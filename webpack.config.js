const webpack = require('webpack');
const config = {
devtool: 'inline-source-map',
entry: {
       home: __dirname + '/templates/static/js/index.jsx',
       projects: __dirname + '/templates/static/js/projects.jsx',
       musiccalendar: __dirname + '/templates/static/js/musiccalendar.jsx',
       vendors: ['react']
     },
output: {
       path: __dirname + '/templates/public/js',
       filename: '[name].bundle.js',
},
resolve: {
       extensions: ['.js','.jsx','.css']
},
module: {     
       rules: [
       {
              test: /\.jsx$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
       },
       {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
       },
       {
              test: /\.css$/,
              loader: 'style-loader!css-loader?modules'
       },
     ]
   }
};
module.exports = config;