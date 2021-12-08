module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/head-to-head/'
    : '/',
  pwa: {
    name: 'Mind Games',
    themeColor: '#009688',
    msTileColor: '#009688',
    manifestOptions: {
      background_color: '#FFFFFF'
    }
  }
}

