'use strict';

angular
    .module('AngularApp')
    .controller('Test_15Ctrl', function (TestFactory) {

        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 15) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
            GetFile();
        }

        function GetFile(){
            console.log('x');
            var blob = null;
            var xhr = new XMLHttpRequest(); 
            xhr.open('GET', 'Hola.txt');
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); 
            xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
            xhr.onload = function() 
            {
                blob = xhr.response;//xhr.response is now a blob object+
                console.log(blob);
                descargarArchivo(blob, 'File.txt')
            }
            xhr.send();
        }

        function descargarArchivo(contenidoEnBlob, nombreArchivo) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var save = document.createElement('a');
                save.href = event.target.result;
                save.target = '_blank';
                save.download = nombreArchivo || 'archivo.dat';
                var clicEvent = new MouseEvent('click', {
                    'view': window,
                        'bubbles': true,
                        'cancelable': true
                });
                save.dispatchEvent(clicEvent);
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            };
            reader.readAsDataURL(contenidoEnBlob);
        };

        var vm = this;

        initData()

    });