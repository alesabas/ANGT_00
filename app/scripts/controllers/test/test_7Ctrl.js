'use strict';

angular
    .module('AngularApp')
    .controller('Test_7Ctrl', function (TestFactory, ngNotify) {

        function Start() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 7) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        function transfer(from, to, index) {
            if (index >= 0) {
                to.push(from[index]);
                from.splice(index, 1);
            } else {
                for (var i = 0; i < from.length; i++) {
                    to.push(from[i]);
                }
                from.length = 0;
            }
        }

        function Guardar(){
            if(vm.SelctItems.length > 0){
                vm.NewItems = vm.SelctItems;
                console.log(vm.NewItems);
            }else{
                ngNotify.set('No has seleccionado ningún ítem.', 'error');
            }
        }

        var vm = this;
        vm.SelctItems = [];
        vm.Items = [
            {
                Name: 'ABC',
                Desc: 'abc'
            },
            {
                Name: 'DEF',
                Desc: 'def'
            },
            {   
                Name: 'GHI',
                Desc: 'ghi'
            },
            {
                Name: 'JKL',
                Desc: 'jkl'
            }
        ];
        vm.transfer = transfer;
        vm.Guardar = Guardar;
        Start()

    });