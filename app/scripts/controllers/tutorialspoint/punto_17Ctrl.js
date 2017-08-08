'use strict';

angular
    .module('AngularApp')
    .controller('Punto_17Ctrl', function(TutorialspointsService){
         
        function Square (){
            vm.Resultado = TutorialspointsService.Square(vm.Number);
        }

         var vm = this;

         vm.Square = Square;

    });