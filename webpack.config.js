const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPWAManifest = require('webpack-pwa-manifest')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new WebpackPWAManifest({
      name: 'Petgram - Tu aplicación de fotos para mascotas',
      short_name: 'Petgram',
      description: 'Una aplicación para ver las mejores fotos de mascotas',
      background_color: '#fff',
      theme_color: '#ff9800',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [198, 128, 144, 192, 256, 384, 512],
          purpose: 'maskable'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: 144,
          purpose: 'any'
        }
      ]
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  }
}
