'use strict';

angular
    .module('AngularApp')
    .service('TutorialspointsService', function(TutorialspointFactory){

        this.Square = function(a) {
            return TutorialspointFactory.Multiply(a,a);
        }

    });