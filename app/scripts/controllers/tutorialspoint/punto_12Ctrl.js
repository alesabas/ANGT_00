'use strict'
angular
    .module('AngularApp')
    .controller('Punto_12Ctrl', function(){

        function Reset(){
            vm.FirstName = "Alejandro";
            vm.LastName = "Jimenez";
            vm.Email = "alejs@mail.com";
        }

        function Submit(){
            alert('Enviado.');
        }

        var vm = this;
        vm.Reset = Reset;
        vm.Submit = Submit;

    });