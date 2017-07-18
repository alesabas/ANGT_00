'use strict';
angular
	.module('testApp')
	.config(function ($stateProvider) {
		var states = [
		{
			name: 'test_main.list',
			abstract: false,
			template: '<div ui-view></div>'
		},
		{
			name: 'test_main.list.test',
			data: {
				pageTitle: 'MAIN | TEST LIST'
			},
			url: '/test',
			templateUrl: 'views/test/test.html',
			controller: 'TestCtrl',
			controllerAs: '$ctrl'
		},
		{
			name: 'test_main.list.test_1',
			data: {
				pageTitle: 'MAIN | TEST 1'
			},
			url: '/test/test_1',
			templateUrl: 'views/test/test_1.html',
			controller: 'Test_1Ctrl',
			controllerAs: '$ctrl'
		},
		{
			name: 'test_main.list.test_0',
			data: {
				pageTitle: 'MAIN | TEST 0'
			},
			url: '/test/test_0',
			templateUrl: 'views/test/test_0.html',
			controller: 'Test_0Ctrl',
			controllerAs: '$ctrl'
		}
		];
		states.forEach(function (state) {
			$stateProvider.state(state);
		});
	});