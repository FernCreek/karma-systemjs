var createPattern = function (path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initSystemJs = function (files) {
  var systemjsPath = require('path').dirname(require.resolve('systemjs')) + '/dist/system.src.js';
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(systemjsPath));
};

initSystemJs.$inject = ['config.files'];

module.exports = {
  'framework:systemjs': ['factory', initSystemJs]
};
