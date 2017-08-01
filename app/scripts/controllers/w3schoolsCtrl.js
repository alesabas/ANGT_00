'use strict';

angular
    .module('AngularApp')
    .controller('W3schoolsCtrl', function(W3schoolsFactory){

        function Start(){
            W3schoolsFactory.SelectTemaList().then(function(data){
                vm.TemaList = data.TemaList;
            });
        }

        var vm = this;

        Start();

    });