'use strict';

angular
    .module('AngularApp')
    .controller('Test_4Ctrl', function(TestFactory){

        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 4) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        var vm = this;

        initData();
    });