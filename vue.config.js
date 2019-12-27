// vue.config.js
module.exports = {
  // options...
  devServer: {
    proxy: 'http://images-api.nasa.gov/search?q=&media_type=image',
  }
}
