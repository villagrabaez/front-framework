const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/index.pug',
    }),

    new HtmlWebpackPlugin({
      template: './src/template/about.pug',
      filename: 'about.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/template/contact.pug',
      filename: 'contact.html'
    }),

    new HtmlWebpackPugPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  }
}