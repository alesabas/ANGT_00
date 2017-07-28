'use strict';

angular
    .module('AngularApp')
    .controller('Test_2Ctrl', function(TestFactory, ngNotify){

        function initData(){
            TestFactory.ConsTestList().then(function(data){
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 2) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        function OpenNoty1(){
            ngNotify.set('Your notification message goes here!');
        }

        function OpenNoty2(){
            ngNotify.set('Your error message goes here!', 'error');
        }

        function OpenNoty3(){
            ngNotify.set('Your first message.',{
                theme: 'pure',
                position: 'top',
                duration: 3000,
                type: 'info',
                sticky: true,
                button: true,
                html: false
            });
        }

        function OpenNoty4(){
            ngNotify.set('Your first message.',{
                theme: 'pure',
                position: 'bottom',
                duration: 3000,
                type: 'info',
                sticky: false,
                button: true,
                html: false
            });
        }

        function OpenNoty5(){
            ngNotify.set('Your first message.',{
                theme: 'pitchy',
                position: 'bottom',
                duration: 3000,
                type: 'error',
                sticky: false,
                button: true,
                html: true
            });
        }

        function OpenNoty6(){
            ngNotify.set('Your first message.',{
                theme: 'pitchy',
                position: 'top',
                duration: 3000,
                type: 'success',
                sticky: false,
                button: true,
                html: true
            });
        }

        var vm = this;

        vm.OpenNoty1 = OpenNoty1;
        vm.OpenNoty2 = OpenNoty2;
        vm.OpenNoty3 = OpenNoty3;
        vm.OpenNoty4 = OpenNoty4;
        vm.OpenNoty5 = OpenNoty5;
        vm.OpenNoty6 = OpenNoty6;

        initData();

    });