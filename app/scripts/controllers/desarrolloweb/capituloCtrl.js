'use strict';

angular
    .module('AngularApp')
    .controller('CapituloCtrl', function(DesarrollowebFactory, $state, $uibModal, $stateParams){

        function initData(){
            DesarrollowebFactory.SelectCapituloList().then(function(data){
                vm.CapituloList = data.CapituloList;
                for(var i = 0; i < vm.CapituloList.length; i ++){
                    if(vm.CapituloList[i].IdCapitulo == vm.IdCapitulo){
                        vm.CapituloListRes = vm.CapituloList[i];
                        $state.go(vm.CapituloListRes.DirCapitulo);
                    }
                }
            });
        }

        var vm = this;
        
        vm.IdCapitulo = $stateParams.IdCapitulo;

        initData();

    });