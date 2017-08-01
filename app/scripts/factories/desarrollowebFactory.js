'use strict';

angular
    .module('AngularApp')
    .factory('DesarrollowebFactory', function($http, $q){

        var factory = {};

        factory.SelectCapituloList = function(){
            var deferred = $q.defer();
            $http.get('scripts/controllers/desarrolloweb/capituloList.json')
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(response){
                deferred.reject(response.data);
            });
            return deferred.promise;
        };

        return factory;

    });