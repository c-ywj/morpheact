module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
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