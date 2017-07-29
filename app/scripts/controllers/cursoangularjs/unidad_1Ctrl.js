'use strict';

angular
    .module('AngularApp')
    .controller('Unidad_1Ctrl', function(CursoangularjsFactory){

        function initData(){
            CursoangularjsFactory.SelectUnidadList().then(function(data){
                vm.UnidadList = data.UnidadList;
                for(var i = 0; i < vm.UnidadList.length; i ++){
                    if(vm.UnidadList[i].IdUnidad == 6){
                        vm.UnidadListRes = vm.UnidadList[i];
                    }
                }
            });
        }

        var vm = this;

        initData();

    });