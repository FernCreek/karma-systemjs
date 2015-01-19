var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initSystemJs = function(files) {
  var es6ModuleLoaderPath = require('path').dirname(require.resolve('es6-module-loader')) + '/../dist/es6-module-loader.src.js';
  var systemjsPath = require.resolve('systemjs');
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(systemjsPath));
  files.unshift(createPattern(es6ModuleLoaderPath));
};

initSystemJs.$inject = ['config.files'];

module.exports = {
  'framework:systemjs': ['factory', initSystemJs]
};
