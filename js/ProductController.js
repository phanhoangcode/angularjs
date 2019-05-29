// Tách controller ra file khác..
(function () {
    'use strict';
    angular.module('MainModule')
        .controller('ProductController', productController);

    productController.$inject = ['$scope'];

    function productController($scope) {

        let vm = this;

        vm.productList = productList();

        console.log(vm.productList);

        $scope.infos = {
            name: 'Phan Hoang',
            age: 26,
            address: 'Ha Noi'
        }

        $scope.$watch('infos.name', function (newValue, oldValue) {
            console.log(`old value: ${oldValue} and new value: ${newValue}`)
        })

        function productList() {
            return {
                garen: {
                    name: 'Garen Demacia',
                    age: 30,
                    gender: 'Male'
                },
                katarina: {
                    name: 'Katarina',
                    age: 19,
                    gender: 'Female'
                }
            };
        }
    }
})();