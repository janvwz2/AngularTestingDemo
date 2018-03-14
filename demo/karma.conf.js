// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// How to configure tests using PhantomJS (see accepted answer):
// https://stackoverflow.com/questions/42660902/phantomjs-does-not-work-with-karma-in-angular2-project

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-phantomjs-launcher'),
      require('@angular/cli/plugins/karma'),
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'], // Use PhantomJS if Chrome causes troubles
    singleRun: false
  });
};
