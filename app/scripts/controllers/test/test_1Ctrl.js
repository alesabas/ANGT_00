'use strict';

angular
  .module('testApp')
  .controller('Test_1Ctrl', function (TestFactory) {

    function initData(){
      TestFactory.ConsTestList().then(function(data){
        vm.TestList = data.RegTestList;
        for(var i = 0; i < vm.TestList.length; i++){
          if(vm.TestList[i].idTest == 1){
            vm.TestListRest = vm.TestList[i];
          }
        }
      });
    }

    var vm = this;
    initData();
  });
