'use strict';

angular
  .module('AngularApp')
  .controller('TestCtrl', function ($state, TestFactory, $uibModal) {

    function initData() {
      TestFactory.ConsTestList().then(function (data) {
        vm.TestList = data.RegTestList;
      });
    }

    function funVerTest(dir) {
      $state.go(dir);
    }

    function funTestModal(testObj){
      var testObj = testObj;
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/test/testModal.html',
        controller: 'TestModalCtrl',
        controllerAs: 'ctrl',
        backdrop: 'static',
        keyboard: true,
        size: 'md',
        resolve: {
          testObj: function () {
            return testObj;
          }
        }
      }).result.catch(function(res) {
        if (!(res === 'cancel' || res === 'escape key press')) {
          throw res;
        }
      });
    }

    var vm = this;
    vm.funVerTest = funVerTest;
    vm.funTestModal = funTestModal;
    initData();

  });