'use strict';

angular
  .module('testApp')
  .controller('Test_1Ctrl', function (TestFactory, $uibModal) {

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

    function AddInfo(){
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/test/test1AddInfoModal.html',
        controller: 'Test1AddInfoModalCtrl',
        controllerAs: 'ctrl',
        backdrop: 'static',
        keyboard: true,
        size: 'md'
      }).result.catch(function(res) {
        if (!(res === 'cancel' || res === 'escape key press')) {
          throw res;
        }
      });
    }

    var vm = this;

    vm.AddInfo = AddInfo;

    initData();
  });