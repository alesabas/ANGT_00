'use strict';

angular
    .module('testApp')
    .controller('Test1AddInfoModalCtrl', function($uibModal, $uibModalInstance){
        
        function Close(){
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Close = Close;

    });