

const PROXY_CONFIG =[
  {
    context:['/api'],
    target: 'https://api-teka.herokuapp.com',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {'^/api': ''}
  }
  ]

  module.exports = PROXY_CONFIG;


