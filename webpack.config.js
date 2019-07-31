const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    library: 'stellar-js-ui',
    libraryTarget: 'umd'
  },
  externals: ['jquery', 'stellar-sdk', 'stellarkit-js-utils', 'axios', 'vue', 'vuetify'],
  // added to kill all comments, remove if you don't care (16k smaller too)
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          cache: true,
          parallel: true,
          output: {
            comments: false,
            semicolons: false
          }
        }
      })
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(vue|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: [/\.scss$/, /\.sass$/],
        exclude: /node_modules/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        // this is for wacky vuetify, doesn't work with my scss
        test: [/\.scss$/, /\.sass$/],
        include: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              fiber: require('fibers'),
              indentedSyntax: true // optional
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
