'use strict';

angular
    .module('AngularApp')
    .controller('TutorialCtrl', function($stateParams, CodigofacilitoFactory, $state){

        function Start(){
            CodigofacilitoFactory.SelectTutorialList().then(function(data){
                vm.TutorialList = data.TutorialList;
                for(var i = 0; i < vm.TutorialList.length; i ++){
                    if(vm.TutorialList[i].IdTutorial == vm.IdTutorial){
                        vm.TutorialListRes = vm.TutorialList[i];
                        $state.go(vm.TutorialListRes.DirTutorial);
                    }
                }
            });
        }

        var vm = this;
        vm.IdTutorial = $stateParams.IdTutorial;
        Start();

    });