const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清除每次构建后之前生成的html文件
const webpack = require('webpack'); 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'/', // 对于外部资源或按需加载很重要
  },
  resolve:{
    extensions:['.jsx','.js'],//配置省略文件后缀辨识规则
    alias:{
      '@src':path.resolve(__dirname,'src/pages'),//配置文件路径
    }
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets: [
              // 添加 preset-react
              "@babel/preset-env", "@babel/preset-react"
            ],
            plugins: ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),// 清除重新构建之前的上一次的构建文件
    // 生成首页入口模板html
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './dist/index.html',
      filename:'index.html',
    }),
    new webpack.ProgressPlugin(),
  ],
  
  // 页面热更新免刷新
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 告诉devServer可访问文件路径
    hot: true, // 开启热替换
    historyApiFallback:true, // 地址栏输入路由报错及刷新报错
    watchOptions: {
      ignored: /node_modules/,
    },
    // 还可配置热更新port host proxy接口代理相关
   },
   // 运行时用户从外部获取库而不是把库打包进项目，下面设置就可以，当然你要在index.html中显式的引入该库
   externals: {
    jquery: 'jQuery',
  },
}