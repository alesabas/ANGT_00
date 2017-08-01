'use strict';

angular
    .module('AngularApp')
    .config(function ($stateProvider) {

        var states = [
			{
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
			},
			{
				name: 'desarrolloweb',
				url: '/desarrolloweb',
				data: {
					pageTitle: 'MAIN | DESARROLLOWEB',
					permissions: {
						except: ['anonymous'],
						options: {
							reload: false
						}
					}
				},
				views: {
					'HomeView': {
						templateUrl: 'views/desarrolloweb.html',
						controller: 'DesarrollowebCtrl',
						controllerAs: '$ctrl'
					}
				},
			},
			{
				name: 'capitulo',
				url: '/desarrolloweb/capitulo/:IdCapitulo',
				data: {
					pageTitle: 'DESARROLLOWEB | CAPÍTULO',
					permissions: {
						except: ['anonymous'],
						options: {
							reload: false
						}
					}
				},
				views: {
					'HomeView': {
						templateUrl: 'views/desarrolloweb/capitulo.html',
						controller: 'CapituloCtrl',
						controllerAs: '$ctrl'
					}
				},
			},
			{
				name: 'codigofacilito',
				url: '/codigofacilito',
				data: {
					pageTitle: 'MAIN | CODIGOFACLITO',
					permissions: {
						except: ['anonymous'],
						options: {
							reload: false
						}
					}
				},
				views: {
					'HomeView': {
						templateUrl: 'views/codigofacilito.html',
						controller: 'CodigofacilitoCtrl',
						controllerAs: '$ctrl'
					}
				},
			},
			{
				name: 'tutorial',
				url: '/codigofacilito/tutorial/:IdTutorial',
				data: {
					pageTitle: 'CODIGOFACILITO | TUTORIAL',
					permissions: {
						except: ['anonymous'],
						options: {
							reload: false
						}
					}
				},
				views: {
					'HomeView': {
						templateUrl: 'views/codigofacilito/tutorial.html',
						controller: 'TutorialCtrl',
						controllerAs: '$ctrl'
					}
				},
			}
		];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });