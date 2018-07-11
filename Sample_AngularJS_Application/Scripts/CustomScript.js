/// <reference path="angular.min.js" />

var myApp = angular.module("MyModule", []); /*Created a module*/

var myController = function ($scope) {    /*Created a controller*/
    $scope.message = "Angular Tutorial"
};

myApp.controller("MyController", myController);  /*Register contoller with module*/
