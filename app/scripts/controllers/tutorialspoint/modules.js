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
            },
            {
                name: 'punto.detalle.6',
                data: {pageTitle: 'TUTORIALSPOINT | PUNTO 6'},
                templateUrl: 'views/tutorialspoint/punto_6.html',
                controller: 'Punto_6Ctrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'punto.detalle.7',
                data: {pageTitle: 'TUTORIALSPOINT | PUNTO 7'},
                templateUrl: 'views/tutorialspoint/punto_7.html',
                controller: 'Punto_7Ctrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'punto.detalle.8',
                data: {pageTitle: 'TUTORIALSPOINT | PUNTO 8'},
                templateUrl: 'views/tutorialspoint/punto_8.html',
                controller: 'Punto_8Ctrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'punto.detalle.10',
                data: {pageTitle: 'TUTORIALSPOINT | PUNTO 10'},
                templateUrl: 'views/tutorialspoint/punto_10.html',
                controller: 'Punto_10Ctrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'punto.detalle.12',
                data: {pageTitle: 'TUTORIALSPOINT | PUNTO 12'},
                templateUrl: 'views/tutorialspoint/punto_12.html',
                controller: 'Punto_12Ctrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'punto.detalle.17',
                data: {pageTitle: 'TUTORIALSPOINT | PUNTO 17'},
                templateUrl: 'views/tutorialspoint/punto_17.html',
                controller: 'Punto_17Ctrl',
                controllerAs: '$ctrl'
            }
        ];
        
        states.forEach(function(state){
            $stateProvider.state(state);
        });

    });