'use strict';

angular
    .module('AngularApp')
    .factory('TutorialspointFactory', function($http, $q){

        var factory = {};
        
        factory.SelectPuntoList = function(){
            var deferred = $q.defer();
            $http.get('scripts/controllers/tutorialspoint/puntoList.json')
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(response){
                deferred.reject(response.data);
            });
            return deferred.promise;
        }

        factory.Multiply = function(a, b){
            return a * b;
        }

        return factory;

    });