let myApp = angular.module('MainModule', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider.when('/products', {
        templateUrl: 'index.html',
        controller: 'ProductController',
        controllerAs: 'vm',
    });
})
