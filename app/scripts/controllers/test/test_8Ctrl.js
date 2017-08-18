'use strict';

angular
    .module('AngularApp')
    .controller('Test_8Ctrl', function (TestFactory) {

        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 8) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        function see(){
            console.log(vm.selectedList);
            console.log(vm.afterSelectItem);
            console.log(vm.beforeSelectItem);
            vm.selectedList2 = vm.selectedList;
        }

        var vm = this;
        vm.optionsList = [
            {id: 1,  name : "Java"},
            {id: 2,  name : "C"},
            {id: 3,  name : "C++"},
            {id: 4,  name : "AngularJs"},
            {id: 5,  name : "JavaScript"}
        ];
        vm.see = see;
        initData()

    });