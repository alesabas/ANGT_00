'use strict';

angular
    .module('AngularApp')
    .controller('Test_11Ctrl', function (TestFactory) {

        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 11) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        function SetTooltip(clv){
            for(var i = 0; vm.Tooltip.length > i; i ++){
                if(clv == vm.Tooltip[i].Clv){
                    vm.T = vm.Tooltip[i].Desc;
                    console.log(vm.T);
                }
            }
        }
        
        var vm = this;
        vm.Tooltip = [
            {'Clv': 1, 'Desc': '1'},
            {'Clv': 2, 'Desc': '2'},
            {'Clv': 3, 'Desc': [
                {'Text': 'A'},
                {'Text': 'B'},
                {'Text': 'C'}
            ]}
        ];
        vm.T = '';
        vm.SetTooltip = SetTooltip;
        initData()

    });