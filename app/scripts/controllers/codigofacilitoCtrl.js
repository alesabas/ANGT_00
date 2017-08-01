'use strict';

angular
    .module('AngularApp')
    .controller('CodigofacilitoCtrl', function(CodigofacilitoFactory, $uibModal){

        function Start(){
            CodigofacilitoFactory.SelectTutorialList().then(function(data){
                vm.TutorialList = data.TutorialList;
            });
        }

        function OpenTutorialModal(IdTutorial){
            var IdTutorial = IdTutorial;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/codigofacilito/tutorialModal.html',
                controller: 'TutorialModalCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: true,
                size: 'md',
                resolve: {
                    IdTutorial: function () {
                        return IdTutorial;
                    }
                }
                }).result.catch(function(res) {
                    if (!(res === 'cancel' || res === 'escape key press')) {
                    throw res;
                }
            });
        }        

        var vm = this;

        vm.OpenTutorialModal = OpenTutorialModal;

        Start();
        
    });