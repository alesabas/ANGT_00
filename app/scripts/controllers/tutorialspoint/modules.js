'use strict';

angular
    .module('AngularApp')
    .config(function($stateProvider){

        var states = [
            {
                name: 'punto.detalle',
                abstract: false,
                template: '<div ui-view></div>'
            },
            {
                name: 'punto.detalle.4',
                data: {pageTitle: 'TUTORIALSPOINT | PUNTO 4'},
                templateUrl: 'views/tutorialspoint/punto_4.html',
                controller: 'Punto_4Ctrl',
                controllerAs: '$ctrl'
            }
        ];
        
        states.forEach(function(state){
            $stateProvider.state(state);
        });

    });