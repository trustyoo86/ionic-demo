/**
 * @name scriptConfig
 * @description 개발된 js 파일 관리
 * @type {Array}
 */

module.exports = {
  //src
  src : [
    'public/app.js',
    'public/constant.js',
    'public/routes.js',
    'public/**/**/*.js',
  ],
  //concat target
  concat : 'app.js',
  //dest target
  dest : 'www/js'
};
