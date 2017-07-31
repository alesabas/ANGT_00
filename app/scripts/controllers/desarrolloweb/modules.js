'use strict';

angular
    .module('AngularApp')
    .config(function($stateProvider){

        var states = [
            {
                name: 'capitulo.detalle',
                abstract: false,
                template: '<div ui-view></div>'
            },
            {
                name: 'capitulo.detalle.13',
                data: {pageTitle: 'DESARROLLOWEB | CAPÍTULO 13'},
                templateUrl: 'views/desarrolloweb/capitulo_13.html',
                controller: 'Capitulo_13Ctrl',
                controllerAs: '$ctrl'
            }
        ];

        states.forEach(function (state) {
			$stateProvider.state(state);
		});

    });