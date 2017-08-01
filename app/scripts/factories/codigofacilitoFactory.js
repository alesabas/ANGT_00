'use strict';

angular
    .module('AngularApp')
    .factory('CodigofacilitoFactory', function($http, $q){

        var factory = {};

        factory.SelectTutorialList = function(){
            var deferred = $q.defer();
            $http.get('scripts/controllers/codigofacilito/tutorialList.json')
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