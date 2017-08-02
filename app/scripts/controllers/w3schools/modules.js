'use strict';

angular
    .module('AngularApp')
    .config(function($stateProvider){

        var states = [
            {
                name: 'tema.detalle',
                abstract: false,
                template: '<div ui-view></div>'
            },
            {
                name: 'tema.detalle.1',
                data: {pageTitle: 'W3SCHOOLS | TEMA 1'},
                templateUrl: 'views/w3schools/tema_1.html',
                controller: 'Tema_1Ctrl',
                controllerAs: '$ctrl'
            }
        ];
        
        states.forEach(function(state){
            $stateProvider.state(state);
        });

    });