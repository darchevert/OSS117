module.exports = {
  entry: './script.js',
  mode:"development",
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: [
         {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }
         ]
      },
      {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
     }
    ]
  }
};
