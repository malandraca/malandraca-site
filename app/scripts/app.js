'use strict';

/**
 * @ngdoc overview
 * @name malandracaSiteApp
 * @description
 * # malandracaSiteApp
 *
 * Main module of the application.
 */
angular
  .module('malandracaSiteApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap-slider'
  ])
  .value('soundManager', soundManager)
  .constant('STREAM_URL','http://radio.pregonera.net:6366/1/;')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/radio', {
        templateUrl: 'views/radio.html',
        controller: 'RadioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })