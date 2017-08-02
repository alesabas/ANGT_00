'use strict';

angular
    .module('AngularApp')
    .controller('W3schoolsCtrl', function(W3schoolsFactory, $uibModal){

        function Start(){
            W3schoolsFactory.SelectTemaList().then(function(data){
                vm.TemaList = data.TemaList;
            });
        }

        function OpenTemaModal(Id){
            var IdTema = Id;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/w3schools/temaModal.html',
                controller: 'TemaModalCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: true,
                size: 'md',
                resolve: {
                    IdTema: function(){
                        return IdTema;
                    }
                }
            }).result.catch(function(res){
                if (!(res === 'cancel' || res === 'escape key press')) {
                    throw res;
                }
            });
        }

        var vm = this;

        vm.OpenTemaModal = OpenTemaModal;
        Start();

    });