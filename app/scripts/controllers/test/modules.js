'use strict';

angular
	.module('AngularApp')
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
				name: 'test_main.list.test_0',
				data: {
					pageTitle: 'MAIN | TEST 0'
				},
				url: '/test/test_0',
				templateUrl: 'views/test/test_0.html',
				controller: 'Test_0Ctrl',
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
				name: 'test_main.list.test_2',
				data: {
					pageTitle: 'MAIN | TEST 2'
				},
				url: '/test/test_2',
				templateUrl: 'views/test/test_2.html',
				controller: 'Test_2Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_3',
				data: {
					pageTitle: 'MAIN | TEST 3'
				},
				url: '/test/test_3',
				templateUrl: 'views/test/test_3.html',
				controller: 'Test_3Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_4',
				data: {
					pageTitle: 'MAIN | TEST 4'
				},
				url: '/test/test_4',
				templateUrl: 'views/test/test_4.html',
				controller: 'Test_4Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_5',
				data: {
					pageTitle: 'MAIN | TEST 5'
				},
				url: '/test/test_5',
				templateUrl: 'views/test/test_5.html',
				controller: 'Test_5Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_6',
				data: {
					pageTitle: 'MAIN | TEST 6'
				},
				url: '/test/test_6',
				templateUrl: 'views/test/test_6.html',
				controller: 'Test_6Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_7',
				data: {
					pageTitle: 'MAIN | TEST 7'
				},
				url: '/test/test_7',
				templateUrl: 'views/test/test_7.html',
				controller: 'Test_7Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_8',
				data: {
					pageTitle: 'MAIN | TEST 8'
				},
				url: '/test/test_8',
				templateUrl: 'views/test/test_8.html',
				controller: 'Test_8Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_9',
				data: {
					pageTitle: 'MAIN | TEST 9'
				},
				url: '/test/test_9',
				templateUrl: 'views/test/test_9.html',
				controller: 'Test_9Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_10',
				data: {
					pageTitle: 'MAIN | TEST 10'
				},
				url: '/test/test_10',
				templateUrl: 'views/test/test_10.html',
				controller: 'fupController',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_11',
				data: {
					pageTitle: 'MAIN | TEST 11'
				},
				url: '/test/test_11',
				templateUrl: 'views/test/test_11.html',
				controller: 'Test_11Ctrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'test_main.list.test_12',
				data: {
					pageTitle: 'MAIN | TEST 12'
				},
				url: '/test/test_12',
				templateUrl: 'views/test/test_12.html',
				controller: 'Test_12Ctrl',
				controllerAs: '$ctrl'
			}
			,
			{
				name: 'test_main.list.test_15',
				data: {
					pageTitle: 'MAIN | TEST 15'
				},
				url: '/test/test_15',
				templateUrl: 'views/test/test_15.html',
				controller: 'Test_15Ctrl',
				controllerAs: '$ctrl'
			}
		];

		states.forEach(function (state) {
			$stateProvider.state(state);
		});
		
	});