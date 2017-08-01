'use strict';

angular
    .module('AngularApp')
    .controller('TemaCtrl', function($stateParams, W3schoolsFactory){

        function Start(){
            W3schoolsFactory.SelectTemaList().then(function(data){
                vm.TemaList = data.TemaList;
                for(var i = 0; i < vm.TemaList.length; i ++){
                    if(vm.TemaList[i].IdTema == vm.IdTema){
                        vm.TemaListRes = vm.TemaList[i];
                    }
                }
            });
        }

        var vm = this;
        
        vm.IdTema = $stateParams.IdTema

        Start();
    });