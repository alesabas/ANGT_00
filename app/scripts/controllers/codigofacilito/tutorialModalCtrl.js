'use strict';

angular
    .module('AngularApp')
    .controller('TutorialModalCtrl', function($uibModalInstance, CodigofacilitoFactory, IdTutorial){
         
         function Start(){
            CodigofacilitoFactory.SelectTutorialList().then(function(data){
                vm.TutorialList = data.TutorialList;
                for(var i = 0; i < vm.TutorialList.length; i++){
                    if(vm.TutorialList[i].IdTutorial == vm.IdTutorial){
                        vm.TutorialListRes = vm.TutorialList[i];
                    }
                }
            });
         }
         
         function Close(){
            $uibModalInstance.dismiss('cancel');
         }

         var vm = this;

         vm.IdTutorial = IdTutorial;

         vm.Close = Close;

         Start();
    });