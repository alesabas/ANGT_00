'use strict';

angular
    .module('AngularApp')
    .controller('TestModalCtrl', function ($uibModalInstance, $uibModal, TestFactory, testObj) {
        
        function initData(){
            TestFactory.ConsTestList().then(function(data){
                vm.TestList = data.RegTestList;
                for(var i = 0; i < vm.TestList.length; i++){
                    if(vm.TestList[i].idTest == vm.testObj.idTest){
                        vm.TestListRest = vm.TestList[i];
                    }
                }
            });
        }

        function funCloseModal(){
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.testObj = testObj;
        vm.funCloseModal = funCloseModal;
        initData();

    });