'use strict';

angular
    .module('testApp')
    .controller('TestModalCtrl', function ($uibModalInstance, $uibModal, TestFactory, testObj) {
        
        function initData(){
            TestFactory.ConsTestList().then(function(data){
                vm.TestList = data.RegTestList;
                console.log("TestList: ", vm.TestList);
                for(var i = 0; i < vm.TestList.length; i++){
                    if(vm.TestList[i].idTest == vm.testObj.idTest){
                        vm.TestListRest = vm.TestList[i];
                        console.log("Resultado: ", vm.TestListRest);
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
        console.log("Test: ", vm.testObj);
        initData();

    });