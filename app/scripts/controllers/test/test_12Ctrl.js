'use strict';

angular
    .module('AngularApp')
    .controller('Test_12Ctrl', function (TestFactory) {

        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 12) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        var vm = this;

        vm.maskOptions = {
            maskDefinitions:{'A': /[a-zA-Z]/, '9': /[0-9]/, '*': /[a-zA-Z0-9]/},
            clearOnBlur: false,
            eventsToHandle:['input', 'keyup', 'click']
        };

        initData()

    });