'use strict';

angular
    .module('AngularApp')
    .controller('UnidadModalCtrl', function($uibModal, $uibModalInstance, CursoangularjsFactory, UnidadObj){
        
        function initData(){
            CursoangularjsFactory.SelectUnidadList().then(function(data){
                vm.UnidadList = data.UnidadList;
                for(var i = 0; i < vm.UnidadList.length; i ++){
                    if(vm.UnidadList[i].IdUnidad == vm.UnidadObj.IdUnidad){
                        vm.UnidadListRes = vm.UnidadList[i];
                    }
                }
            });
        }

        function Close(){
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;

        vm.UnidadObj = UnidadObj;

        vm.Close = Close;

        initData();

    });