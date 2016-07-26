/**
 * @name styleConfig
 * @description library style 및 개발 style 리스트
 * @type {Object}
 */
module.exports = {
  //vender
  ionic : {
    src :[
      'public/styles/style.scss'
    ],
    concat : 'ionic.css',
    dest : 'www/styles'
  },
  //개발용 css
  dev : {
    src :'public/styles/dev/*.scss',
    concat : 'main.css',
    dest : 'www/styles/dev'
  }
};
