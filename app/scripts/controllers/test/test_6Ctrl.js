'use strict';

angular
    .module('AngularApp')
    .controller('Test_6Ctrl', function(TestFactory, $window){

        function Start() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 6) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        function alertMe() {
            setTimeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        }

        function AddNum(){

        }

        var vm = this;

        vm.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        vm.model = { name: 'Tabs' };
        vm.alertMe = alertMe;
        vm.AddNum = AddNum;
        Start();

    });