'use strict';

angular
    .module('AngularApp')
    .factory('TestFactory', function($http, $q){

        var factory = {};

        factory.ConsTestList = function(){
            var deferred = $q.defer();
            $http.get("scripts/controllers/test/testList.json")
            .then(function (response) {
                deferred.resolve(response.data);
            })
            .catch(function (response) {
                deferred.reject(response.data);
            });
            return deferred.promise;
        };

        return factory;

    });