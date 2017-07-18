'use strict';

angular
    .module('testApp')
    .config(function ($stateProvider) {

        var states = [{
				name: 'home',
				data: {
					pageTitle: 'MAIN | HOME',
					permissions: {
						except: ['anonymous'],
						options: {
							reload: false
						}
					}
				},
				url: '/home',
				views: {
					'HomeView': {
						templateUrl: 'views/main.html',
						controller: 'HomeCtrl',
						controllerAs: '$ctrl'
					}
				},
			},
			{
				name: 'about',
				url: '/about',
				data: {
					pageTitle: 'MAIN | ABOUT'
				},
				views: {
					'HomeView': {
						templateUrl: 'views/about.html',
						controller: 'AboutCtrl',
						controllerAs: '$ctrl'
					}
				},
			},
			{
				name: 'test_main',
				url: '/test_main',
				data: {
					pageTitle: 'MAIN | TEST',
					permissions: {
						except: ['anonymous'],
						options: {
							reload: false
						}
					}
				},
				views: {
					'HomeView': {
						templateUrl: 'views/test_main.html',
						controller: 'Test_mainCtrl',
						controllerAs: '$ctrl'
					}
				},
			}
		];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });