'use strict';
angular
  .module('AngularApp', [
    'angular-loading-bar',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination',
    'angularValidator',
    'ngNotify',
    'blockUI',
    'multipleSelect'
  ])
  .config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider, $qProvider, blockUIConfig){
      $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('home');
      });
      cfpLoadingBarProvider.includeSpinner = false;
      $qProvider.errorOnUnhandledRejections(false);
      blockUIConfig.templateUrl = 'views/components/loading.html';
  })
  .run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams; 
  });