'use strict';

angular
    .module('AngularApp')
    .controller('Capitulo_13Ctrl', function(){

        function Sumar(){
            if(vm.Cantidad != null && vm.Cantidad != 0){
                vm.Total = vm.Total + vm.Cantidad;
            }
        }

        function Restar(){
            if(vm.Cantidad != null && vm.Cantidad != 0){
                vm.Total = vm.Total - vm.Cantidad;
            }
        }

        var vm = this;
        
        vm.Encabezado = ["Fondo", "ColorFuente", "TamanoFuente"];
        vm.Total = 0;

        vm.Sumar = Sumar;
        vm.Restar = Restar;

    });