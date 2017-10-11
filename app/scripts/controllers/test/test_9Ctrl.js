'use strict';

angular
    .module('AngularApp')
    .controller('Test_9Ctrl', function (TestFactory, $scope, $window) {

        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 9) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }
        var vm = this;

        vm.tabs = [
    {
        id: 1,
        title:'Dynamic Title 1',
        content:'Dynamic content 1'
    },
    {
        id: 2,
        title:'Dynamic Title 2',
        content:'Dynamic content 2',
        disabled: true
    },
    {
        id: 3,
        title:'Dynamic Title 3',
        content:'Dynamic content 3'
    },
    {
        id: 4,
        title:'Dynamic Title 4',
        content:'Dynamic content 4'
    },
    {
        id: 5,
        title:'Dynamic Title 5',
        content:'Dynamic content 5'
    },
    {
        id: 6,
        title:'Dynamic Title 6',
        content:'Dynamic content 6'
    },
  ];

  vm.selectTab = function(tabId) {
    console.log('Selected tab: ' + tabId);
  };

        
        initData()

    });