module.exports = {
  entry: './static/js/index.jsx',
  output: {
    path: __dirname + "/static/js",
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};