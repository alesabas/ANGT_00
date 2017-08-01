'use strict';

angular
    .module('AngularApp')
    .controller('CapituloModalCtrl', function($uibModalInstance, DesarrollowebFactory, IdCapitulo){
        
        function initData(){
            DesarrollowebFactory.SelectCapituloList().then(function(data){
                vm.CapituloList = data.CapituloList;
                for(var i = 0; i < vm.CapituloList.length; i ++){
                    if(vm.CapituloList[i].IdCapitulo == vm.IdCapitulo){
                        vm.CapituloListRes = vm.CapituloList[i];
                    }
                }
            });
        }

        function Close(){
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;

        vm.IdCapitulo = IdCapitulo;

        vm.Close = Close;

        initData();

    });