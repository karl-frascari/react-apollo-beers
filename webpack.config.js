const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.jsx']
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'build')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'postcss-loader'
          ]
        }),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'sass-loader'
          ]
        }),
      },
      {
        test: /\.(png|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("style.css"),

    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: true
  }
};