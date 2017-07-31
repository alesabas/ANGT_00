'use strict';

angular
    .module('AngularApp')
    .controller('Capitulo_13Ctrl', function(DesarrollowebFactory){

        function initData(){
            DesarrollowebFactory.SelectCapituloList().then(function(data){
                vm.CapituloList = data.CapituloList;
                for(var i = 0; i < vm.CapituloList.length; i ++){
                    if(vm.CapituloList[i].IdCapitulo == 6){
                        vm.CapituloListRes = vm.CapituloList[i];
                    }
                }
            });
        }

        var vm = this;

        initData();

    });