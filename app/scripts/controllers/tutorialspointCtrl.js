'use strict';

angular
    .module('AngularApp')
    .controller('TutorialspointCtrl', function(TutorialspointFactory, $uibModal){

        function Start(){
            TutorialspointFactory.SelectPuntoList().then(function(data){
                vm.PuntoList = data.PuntoList;
            });
        }

        function OpenPuntoModal(Id){
            var IdPunto = Id;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/tutorialspoint/puntoModal.html',
                controller: 'PuntoModalCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: true,
                size: 'md',
                resolve: {
                    IdPunto: function(){
                        return IdPunto;
                    }
                }
            }).result.catch(function(res){
                if (!(res === 'cancel' || res === 'escape key press')) {
                    throw res;
                }
            });
        }

        var vm = this;

        vm.OpenPuntoModal = OpenPuntoModal;
        Start();
        
    });