'use strict';

angular
    .module('AngularApp')
    .controller('DesarrollowebCtrl', function(DesarrollowebFactory, $state, $uibModal){
        
        function initData(){
            DesarrollowebFactory.SelectCapituloList().then(function(data){
                vm.CapituloList = data.CapituloList;
            });
        }

        function GoToCapitulo(dir){
            $state.go(dir);
        }

        function OpenCapituloModal(Id){
            var IdCapitulo = Id;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/desarrolloweb/capituloModal.html',
                controller: 'CapituloModalCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: true,
                size: 'md',
                resolve: {
                    IdCapitulo: function () {
                        return IdCapitulo;
                    }
                }
            }).result.catch(function(res) {
                if (!(res === 'cancel' || res === 'escape key press')) {
                    throw res;
                }
            });
        }

        var vm = this;

        vm.GoToCapitulo = GoToCapitulo;
        vm.OpenCapituloModal = OpenCapituloModal;

        initData();

    });