'use strict';

angular
    .module('AngularApp')
    .factory('W3schoolsFactory', function($http, $q){

        var factory = {};
        
        factory.SelectTemaList = function(){
            var deferred = $q.defer();
            $http.get('scripts/controllers/w3schools/temaList.json')
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(response){
                deferred.reject(response.data);
            });
            return deferred.promise;
        }

        return factory;

    });