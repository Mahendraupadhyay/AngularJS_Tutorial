/// <reference path="angular.min.js" />

var myApp = angular.module("MyModule", []); /*Created a module*/

var myController = function ($scope) {  
    var employee = {
        fisrtName:"Mahendra",
        lastName:"Upadhyay",
        gender:"Male"
    };
    $scope.employee = employee;
};

myApp.controller("MyController", myController);  /*Register contoller with module*/
