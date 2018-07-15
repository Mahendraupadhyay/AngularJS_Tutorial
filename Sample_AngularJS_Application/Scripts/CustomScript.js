/// <reference path="angular.min.js" />



var myApp = angular
    .module("MyModule", [])
    .controller("MyController", function ($scope) {
        var country = {
            name: "India",
            flag: "/Image/pexels-photo-248797.jpeg"
        };
        $scope.country = country;
    });