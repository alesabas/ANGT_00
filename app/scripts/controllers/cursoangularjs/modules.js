'use strict';

angular
    .module('AngularApp')
    .config(function($stateProvider){

        var states = [
            {
                name: 'cursoangularjs.list',
                abstract: false,
                template: '<div ui-view></div>'
            },
            {
                   name: 'cursoangularjs.list.unidades',
                   data: {pageTitle: 'CURSOANGULARJS | UNIDADES'},
                   url: '/unidades',
                   templateUrl: 'views/cursoangularjs/unidad.html',
                   controller: 'UnidadCtrl',
                   controllerAs: '$ctrl'
            },
            {
                   name: 'cursoangularjs.list.unidad_1',
                   data: {pageTitle: 'CURSOANGULARJS | UNIDAD 1'},
                   url: '/unidad_1',
                   templateUrl: 'views/cursoangularjs/unidad_1.html',
                   controller: 'Unidad_1Ctrl',
                   controllerAs: '$ctrl'
            }
        ];

        states.forEach(function (state) {
			$stateProvider.state(state);
		});

    });