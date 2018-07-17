/// <reference path="angular.min.js" />

var myApp = angular
    .module("MyModule", [])
    .controller("MyController", function ($scope) {
        //var employees = [
        //    { name : "Name1", gender : "M", Salary : 13 },
        //    { name : "Name2", gender :"F", Salary : 133 },
        //    { name : "Name3", gender : "O", Salary : 132 }];       

        //var countries = [
        //    { 
        //        name:"India",
        //        cities:[{ name:"Mumbai" }, { name:"Bhopal" }, { name:"Delhi" }]
        //    },
        //    {
        //        name:"US",
        //        cities:[{ name:"US City1" }, { name:"US City2" }, { name:"US City3" }]
        //    },
        //    {
        //        name:"UK",
        //        cities:[{ name:"UK City1" }, { name:"UK City2" }, { name:"UK City3" }]
        //    }];
        //$scope.countries = countries;

        var technologies = [
            { name: "C#", likes: 0, dislikes: 0 },
            { name: "ASP.Net", likes: 0, dislikes: 0 },
            { name: "WCF", likes: 0, dislikes: 0 }];

        $scope.technologies = technologies;
        $scope.IncrementLikes = function (technology) { technology.likes++ }
        $scope.IncrementDislikes = function (technology) { technology.dislikes++ }
    });