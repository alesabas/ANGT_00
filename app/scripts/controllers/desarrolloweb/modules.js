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
                //url: '/13',
                templateUrl: 'views/desarrolloweb/capitulo_13.html',
                controller: 'Capitulo_13Ctrl',
                controllerAs: '$ctrl'
            }
        ];
        /*var states = [
            {
                name: 'desarrolloweb.list',
                abstract: false,
                template: '<div ui-view></div>'
            },
            {
                   name: 'desarrolloweb.list.capitulos',
                   data: {pageTitle: 'DESARROLLOWEB | CAPÍTULOS'},
                   url: '/capítulos',
                   templateUrl: 'views/desarrolloweb/capituloList.html',
                   controller: 'CapituloListCtrl',
                   controllerAs: '$ctrl'
            },
            {
                   name: 'desarrolloweb.list.capitulo_1',
                   data: {pageTitle: 'DESARROLLOWEB | CAPTÍULO 1'},
                   url: '/capítulo_1',
                   templateUrl: 'views/desarrolloweb/capitulo_1.html',
                   controller: 'Capitulo_1Ctrl',
                   controllerAs: '$ctrl'
            }
        ];*/

        states.forEach(function (state) {
			$stateProvider.state(state);
		});

    });