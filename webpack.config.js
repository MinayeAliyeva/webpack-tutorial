const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      //image(assset)loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      //css loader
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
  devServer: {
    port: 9000, // Sunucunun çalışacağı port
    static: path.resolve(__dirname, "dist"), // Statik dosyaların yükleneceği dizin
    open: true, // Sunucu başlatıldığında tarayıcıyı otomatik açar
    hot: true, // Hot Module Replacement'ı etkinleştirir
    // compress: true, // İçeriği sıkıştırarak sunar
    // historyApiFallback: true, // SPA uygulamalarda yönlendirmeyi sağlar
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
//cli==>command line interface (webpack komandlarini terminalda isletmek)
///>8kb =>resource <8kb inline
//css loader import css file to js
//style loader => style tagi yaradir
