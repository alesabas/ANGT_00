'use strict';

angular
  .module('AngularApp')
  .controller('Test_1Ctrl', function (TestFactory, $uibModal, $rootScope) {

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

    function ModalAddInfo(){
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

    $rootScope.$on('AddUserInfo', function(e, UserInfo){
      console.log('UserInfo: ', UserInfo);
      vm.Nombre = UserInfo.Nombre;
      vm.ApellidoPaterno = UserInfo.ApellidoPaterno;
      vm.ApellidoMaterno = UserInfo.ApellidoMaterno;
      vm.Calle = UserInfo.Calle;
      vm.Colonia = UserInfo.Colonia;
      vm.Municipio = UserInfo.Municipio;
      vm.Telefono = UserInfo.Telefono;
      vm.Correo = UserInfo.Correo;
    });

    var vm = this;

    vm.ModalAddInfo = ModalAddInfo;

    initData();
  });