'use strict';

angular
    .module('AngularApp')
    .controller('Test_5Ctrl', function(TestFactory, $http){

        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 5) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });

            $http.get('scripts/controllers/test/select.php').then(function(data){
                console.log(data);
            })
        }

        var vm = this;

        initData();

    });