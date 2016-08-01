/**
 * Created by Mike on 7/24/2016.
 */

var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./entry.js",

    // TODO include jquery with Webpack - currently not working
    // TODO include bootstrap STYLES with Webpack - currently not working
    vendor: [
      'bootstrap-sass',
      'angular',
      'angular-route',
      'angular-ui-bootstrap'
    ]
  },
  output: {
    // path: __dirname + "/assets/dist/js",
    filename: "app.bundle.js"
  },
  watch: true,

  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // loader: "style-loader!css-loader!sass-loader"
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ],
    resolve: {
      extensions: ['', '.js', '.css', '.scss'],
      modulesDirectories: [
        'node_modules'
      ]
    }
  }

};