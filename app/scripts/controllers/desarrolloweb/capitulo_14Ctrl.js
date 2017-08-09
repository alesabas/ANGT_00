'use strict';

angular
    .module('AngularApp')
    .controller('Capitulo_14Ctrl', function(){
        
        function Avisar(){
            console.log("Cambié");
        }

        var vm = this;
        vm.Avisar = Avisar;

    });