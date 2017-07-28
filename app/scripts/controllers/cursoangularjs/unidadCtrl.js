'use strict';

angular
    .module('AngularApp')
    .controller('UnidadCtrl', function(CursoangularjsFactroy){

        function initData(){
            CursoangularjsFactroy.SelectUnidadList().then(function(data){
                vm.UnidadList = data.UnidadList;
            });
        }

        var vm = this;

        initData();

    });