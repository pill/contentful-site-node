const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: { url: false, sourceMap: !isProduction } },
              { loader: 'sass-loader', options: { sourceMap: !isProduction } }
          ],
        },
      ]
    },
    target: 'web',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      port: 8080,
      // contentBase: './dist',
      historyApiFallback: true
    },
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"  }),
      new Dotenv(),
      new MiniCssExtractPlugin({
        filename: "style.css"
      }),
      // Ignore moment.js locales to reduce bundle size
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      }),
    ],
    optimization: {
      minimize: isProduction,
    }
  };
};
