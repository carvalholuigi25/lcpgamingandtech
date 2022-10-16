var HtmlWebpackPlugin = require("html-webpack-plugin");

function getBase() {
  return {
    href: process.env.NODE_ENV == 'production' ? '/dist/' : '/'
  };
}

function getUrlT(isEnabledEnv = false, isHttpsEnabled = true) {
  var myurlhttp = isHttpsEnabled ? "https" : "http";
  var myurl = myurlhttp + "://localhost:3001";
  return isEnabledEnv ? (process.env.NODE_ENV == "development" ? myurl : "") : myurl;
}

function setMinifyForWPConfig() {
  return {
    removeAttributeQuotes: false,
    collapseWhitespace: true,
    removeComments: true
  };
}

function getPages(isProd = false) {
  var optmini = isProd ? setMinifyForWPConfig() : { removeAttributeQuotes: false };
  var year = new Date().getUTCFullYear();

  return [
    new HtmlWebpackPlugin({
        title: "LCP Gaming'n'Tech",
        filename: "index.html",
        template: "./src/index.ejs",
        chunks: ['main'],
        minify: optmini,
        year: year,
        base: getBase(),
        url: getUrlT(false, true)
    }),
    new HtmlWebpackPlugin({
        title: "LCP Gaming'n'Tech - Gaming",
        filename: "gaming.html",
        template: "./src/gaming.ejs",
        chunks: ['pages'],
        minify: optmini,
        year: year,
        base: getBase(),
        url: getUrlT(false, true)
    }),
    new HtmlWebpackPlugin({
        title: "LCP Gaming'n'Tech - Tech",
        filename: "tech.html",
        template: "./src/tech.ejs",
        chunks: ['pages'],
        minify: optmini,
        year: year,
        base: getBase(),
        url: getUrlT(false, true)
    })
  ];
}

module.exports = { getBase, getUrlT, setMinifyForWPConfig, getPages };