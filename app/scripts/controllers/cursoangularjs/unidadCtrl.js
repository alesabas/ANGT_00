'use strict';

angular
    .module('AngularApp')
    .controller('UnidadCtrl', function(CursoangularjsFactory, $state, $uibModal){

        function initData(){
            CursoangularjsFactory.SelectUnidadList().then(function(data){
                vm.UnidadList = data.UnidadList;
            });
        }

        function GoToUnidad(dir){
            $state.go(dir);
        }

        function OpenUnidadModal(UnidadObj){
            var UnidadObj = UnidadObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/cursoangularjs/unidadModal.html',
                controller: 'UnidadModalCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: true,
                size: 'md',
                resolve: {
                    UnidadObj: function () {
                        return UnidadObj;
                    }
                }
                }).result.catch(function(res) {
                    if (!(res === 'cancel' || res === 'escape key press')) {
                    throw res;
                }
            });
        }

        var vm = this;

        vm.GoToUnidad = GoToUnidad;
        vm.OpenUnidadModal = OpenUnidadModal;

        initData();

    });