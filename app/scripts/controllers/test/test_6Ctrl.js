'use strict';

angular
    .module('AngularApp')
    .controller('Test_6Ctrl', function(TestFactory, $window){

        function Start(){
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                    if (vm.TestList[i].idTest == 6) {
                        vm.TestListRest = vm.TestList[i];
                    }
                }
            });
        }

        function alertMe(){
            setTimeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        }

        function AddNum(){   
            var Num = vm.Number;
            vm.Numbers.push(Num);
        }

        function DeleteNum(){
           for(var i = 0; i < vm.Numbers.length; i ++){
                if(vm.Numbers[i] == vm.NumberDelete){
                    vm.Numbers.splice(i, 1);
                    break;
                }
            }
        }

        function SearchNum(){
            for(var i = 0; i < vm.Numbers.length; i ++){
                if(vm.Numbers[i] == vm.NumberDelete){
                    return true;
                }
            }
        }

        var vm = this;

        vm.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        vm.Status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        vm.model = { name: 'Tabs' };
        vm.Numbers = [];
        vm.alertMe = alertMe;
        vm.AddNum = AddNum;
        vm.DeleteNum = DeleteNum;
        Start();

    });