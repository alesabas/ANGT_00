'use strict';

angular.module('testApp')
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

    /* Resp exportToFile()
    function exportToFile(){
        var objectToExport = {
          string: "präüöop",
          number: 2
        };
        var filename = "l.txt";       
        var blob = new Blob([angular.toJson(objectToExport, true)], {type: 'text/text'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        } else{
            var e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            // window.URL.revokeObjectURL(url); // clean the url.createObjectURL resource
        }
    };*/

    var vm = this;
    vm.funVerTest = funVerTest;
    vm.funTestModal = funTestModal;
    initData();

  });