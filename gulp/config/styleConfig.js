/**
 * @name styleConfig
 * @description library style 및 개발 style 리스트
 * @type {Object}
 */
module.exports = {
  //vender
  vender : {
    src :[
      'bower_components/ionic/css/ionic.css'
    ],
    concat : 'vender.css',
    dest : 'www/styles'
  },
  //개발용 css
  dev : {
    src :'public/styles/**/*.scss',
    concat : 'style.css',
    dest : 'www/styles'
  }
};
