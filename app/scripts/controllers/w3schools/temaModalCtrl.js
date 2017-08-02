'use strict';

angular
    .module('AngularApp')
    .controller('TemaModalCtrl', function($uibModalInstance, W3schoolsFactory, IdTema){

        function Start(){
            W3schoolsFactory.SelectTemaList().then(function(data){
                vm.TemaList = data.TemaList;
                for(var i = 0; i < vm.TemaList.length; i++){
                    if(vm.TemaList[i].IdTema == vm.IdTema){
                        vm.TemaListRes = vm.TemaList[i];
                    }
                }
            });
         }

        function Close(){
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdTema = IdTema;
        vm.Close = Close;
        Start();

    });