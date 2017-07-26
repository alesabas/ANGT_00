'use strict';
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination',
    'angularValidator'
  ])
  .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('home');
      });
  })
  .run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams; 
  });