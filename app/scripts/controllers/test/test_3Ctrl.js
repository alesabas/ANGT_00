'use strict';

angular
    .module('AngularApp')
    .controller('Test_3Ctrl',function(TestFactory, $http){
        
        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 3) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }
        
        var vm = this;
        
        //Cambio de esquema free
        
        initData();

    });