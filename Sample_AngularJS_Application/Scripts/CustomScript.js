/// <reference path="angular.min.js" />



var myApp = angular
    .module("MyModule", [])
    .controller("MyController", function ($scope) {
        var employee = {
            firstName: "Mahendra",
            lastName: "Upadhyay",
            gender: "Male"
        };
        $scope.employee = employee;
    });