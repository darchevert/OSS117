module.exports = {
  entry: './public/javascripts/script.js',
  mode:"development",
  output: { path: __dirname+ './public/javascripts/', filename: 'bundle.js' },
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
