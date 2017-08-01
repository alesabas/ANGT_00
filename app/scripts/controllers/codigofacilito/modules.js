'use strict';

angular
    .module('AngularApp')
    .config(function($stateProvider){
        
        var states = [
            {
                name: 'tutorial.detalle',
                abstract: false,
                template: '<div ui-view></div>'
            },
            {
                name: 'tutorial.detalle.7',
                data: {pageTitle: 'CODIGOFACILITO | TUTORIAL 7'},
                templateUrl: 'views/codigofacilito/tutorial_7.html',
                controller: 'Tutorial_7Ctrl',
                controllerAs: '$ctrl'
            }
        ];

        states.forEach(function(state){
            $stateProvider.state(state);
        });

    });