'use strict';

angular
    .module('AngularApp')
    .config(function($stateProvider){

        var states = [
            {
                name: 'desarrolloweb.list',
                abstract: false,
                template: '<div ui-view></div>'
            },
            {
                   name: 'desarrolloweb.list.capitulos',
                   data: {pageTitle: 'DESARROLLOWEB | CAPITULOS'},
                   url: '/capitulos',
                   templateUrl: 'views/desarrolloweb/capitulo.html',
                   controller: 'CapituloCtrl',
                   controllerAs: '$ctrl'
            },
            {
                   name: 'desarrolloweb.list.capitulo_1',
                   data: {pageTitle: 'DESARROLLOWEB | CAPITULO 1'},
                   url: '/capitulo_1',
                   templateUrl: 'views/desarrolloweb/capitulo_1.html',
                   controller: 'capitulo_1Ctrl',
                   controllerAs: '$ctrl'
            }
        ];

        states.forEach(function (state) {
			$stateProvider.state(state);
		});

    });