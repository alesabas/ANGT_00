

'use strict';

angular
    .module('AngularApp')

    /*v1
    .controller('Test_10Ctrl', function($scope, fileUpload, TestFactory){
        
        function initData() {
            TestFactory.ConsTestList().then(function (data) {
                vm.TestList = data.RegTestList;
                for (var i = 0; i < vm.TestList.length; i++) {
                  if (vm.TestList[i].idTest == 10) {
                    vm.TestListRest = vm.TestList[i];
                  }
                }
            });
        }

        function uploadFile(){
            var file = $scope.myFile;
            console.log('file is ' );
            console.dir(file);
            fileUpload.uploadFileToUrl(file);
        };

        var vm = this;
        vm.uploadFile = uploadFile;
        initData();

    });
*/
      /*v2*/
        .directive('ngFiles', ['$parse', function ($parse) {

            function fn_link(scope, element, attrs) {
                var onChange = $parse(attrs.ngFiles);
                element.on('change', function (event) {
                    onChange(scope, { $files: event.target.files });
                });
            };

            return {
                link: fn_link
            }
        } ])
        .controller('fupController', function ($scope, $http) {

            var formdata = new FormData();
            $scope.getTheFiles = function ($files) {
                angular.forEach($files, function (value, key) {
                    formdata.append(key, value);
                });
            };

            // NOW UPLOAD THE FILES.
            $scope.uploadFiles = function () {
                console.dir(formdata);
                console.log(formdata);
                /*
                var request = {
                    method: 'POST',
                    url: '/api/fileupload/',
                    data: formdata,
                    headers: {
                        'Content-Type': undefined
                    }
                };
                */
                // SEND THE FILES.
                /*
                $http(request)
                    .success(function (d) {
                        alert(d);
                    })
                    .error(function () {
                    });
                    */
            }
        });