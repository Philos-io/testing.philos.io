module.exports = function () {
  return {
    files: [
      'node_modules/chai/chai.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/index.js',
      'src/unit/*.js'
    ],
    tests: [
      'test/*.js'
    ]
  };
};
