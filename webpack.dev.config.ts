import path from 'path'
import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { Configuration, DefinePlugin, HotModuleReplacementPlugin } from 'webpack'

dotenv.config({ path: './.env' })

const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  entry: './webapp/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'webapp/index.html'
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  }
}

export default config
