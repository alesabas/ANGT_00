'use strict';

angular
    .module('AngularApp')
    .controller('Test1AddInfoModalCtrl', function($uibModal, $uibModalInstance, $rootScope){
        
        function Close(){
            $uibModalInstance.dismiss('cancel');
        }

        function AddInfo(){
            var UserInfo = {}
            UserInfo.Nombre = vm.Nombre;
            UserInfo.ApellidoPaterno = vm.ApellidoPaterno;
            UserInfo.ApellidoMaterno = vm.ApellidoMaterno;
            UserInfo.Calle = vm.Calle;
            UserInfo.Colonia = vm.Colonia;
            UserInfo.Municipio = vm.Municipio;
            UserInfo.Telefono = vm.Telefono;
            UserInfo.Correo = vm.Correo;
            console.log('UserInfo: ',UserInfo);
            Close();
            $rootScope.$emit('AddUserInfo',UserInfo);
        }

        var vm = this;
        vm.Close = Close;
        vm.AddInfo = AddInfo;

    });