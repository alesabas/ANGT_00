'use strict';

angular
    .module('AngularApp')
    .controller('PuntoModalCtrl', function($uibModalInstance, TutorialspointFactory, IdPunto){

        function Start(){
            TutorialspointFactory.SelectPuntoList().then(function(data){
                vm.PuntoList = data.PuntoList;
                for(var i = 0; i < vm.PuntoList.length; i++){
                    if(vm.PuntoList[i].IdPunto == vm.IdPunto){
                        vm.PuntoListRes = vm.PuntoList[i];
                    }
                }
            });
         }

        function Close(){
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdPunto = IdPunto;
        vm.Close = Close;
        Start();

    });