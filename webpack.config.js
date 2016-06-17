module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'app.js',
    path: './dist/'
  },
  module: {
    loaders: [
      {
        test: /require\.js$/,
        loader: "exports?requirejs!script"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        requirejs$:  "./dist/"
      },
    },
    noParse: [
      /node_modules\/formiojs\//,
    ],

  }
}