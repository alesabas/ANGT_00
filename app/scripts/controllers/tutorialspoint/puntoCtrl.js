'use strict';

angular
    .module('AngularApp')
    .controller('PuntoCtrl', function($stateParams, TutorialspointFactory, $state){

        function Start(){
            TutorialspointFactory.SelectPuntoList().then(function(data){
                vm.PuntoList = data.PuntoList;
                for(var i = 0; i < vm.PuntoList.length; i ++){
                    if(vm.PuntoList[i].IdPunto == vm.IdPunto){
                        vm.PuntoListRes = vm.PuntoList[i];
                        $state.go(vm.PuntoListRes.DirPunto);
                    }
                }
            });
        }

        var vm = this;
        vm.IdPunto = $stateParams.IdPunto
        Start();
        
    });