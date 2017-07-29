'use strict';

angular
    .module('AngularApp')
    .factory('CursoangularjsFactory', function($http, $q){

        var factory = {};

        factory.SelectUnidadList = function(){
            var deferred = $q.defer();
            $http.get("scripts/controllers/cursoangularjs/unidadList.json").then(function(response){
                deferred.resolve(response.data);
            }).catch(function(response){
                deferred.reject(response.data);
            });
            return deferred.promise;
        };

        return factory;

    });