const path = require('path')

module.exports = {
  // 初回読み込み
  //entry: './src/index.js',
  //entry: './src/index.ts',
  entry: './src/index.tsx',
   module: {
     rules: [
       {
         //test: /\.ts$/,
         test: /\.(ts|tsx)$/,
         use: 'ts-loader',
         exclude: /node_modules/,
       },
     ],
   },
   resolve: {
     //extensions: ['.ts'],
     extensions: ['.js','.ts','.tsx'],
   },
  // 出力ファイル設定
  // 本設定ファイル配置ディレクトリのdistディレクトリにindex.jsを出力
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
    },
    devServer: {
        publicPath: '/dist/',
        hot: true,
        open: true,
    }
}