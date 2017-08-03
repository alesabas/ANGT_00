'use strict';

angular
    .module('AngularApp')
    .controller('Punto_7Ctrl', function(){

        function fullName() {
            var studentObject;
            studentObject = vm.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }

        var vm = this;

        vm.student = {
            firstName: "Mahesh",
            lastName: "Parashar"
        };

        vm.fullName = fullName;

    });