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
            }
        ];

        states.forEach(function (state) {
			$stateProvider.state(state);
		});

    });