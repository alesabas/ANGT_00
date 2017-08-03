'use strict';
 angular
    .module('AngularApp')
    .controller('Punto_8Ctrl', function(){

        function FullName(){
            var StudentObject;
            StudentObject = vm.Student;
            return StudentObject.FirstName + " " + StudentObject.LastName;
        }

        var vm = this;

        vm.Student = {
            FirstName: "Mahesh",
            LastName: "Parashar",
            Fees:500
        };
               
        vm.Subjects = [
            {
                Name:'Physics',
                Marks:70
            },
            {
                Name:'Chemistry',
                Marks:80
            },
            {
                Name:'Math',
                Marks:65
            }
        ];

        vm.FullName = FullName;

    });