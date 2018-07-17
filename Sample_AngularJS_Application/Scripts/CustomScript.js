/// <reference path="angular.min.js" />

var myApp = angular
    .module("MyModule", [])
    .controller("MyController", function ($scope) {

        var employees = [
            { name: "Emp1", dob: new Date("November 23,1980"), gender: "Male", Salary: 55224 },
            { name: "Emp2", dob: new Date("08/25/1992"), gender: "Female", Salary: 56482 },
            { name: "Emp4", dob: new Date("12/6/2018"), gender: "Male", Salary: 1200.023 },
            { name: "Emp5", dob: new Date("22/12/1998"), gender: "Male", Salary: 1548957.2356 },];

        $scope.employees = employees;
        $scope.rowLimit = 3;

         //var technologies = [    //Event Handling in Angular
        //    { name: "C#", likes: 0, dislikes: 0 },
        //    { name: "ASP.Net", likes: 0, dislikes: 0 },
        //    { name: "WCF", likes: 0, dislikes: 0 }];

        //$scope.technologies = technologies;
        //$scope.IncrementLikes = function (technology) { technology.likes++ }
        //$scope.IncrementDislikes = function (technology) { technology.dislikes++ }

        //var countries = [ // Nested ng-repeat
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

        //var employees = [
        //    { name : "Name1", gender : "M", Salary : 13 },
        //    { name : "Name2", gender :"F", Salary : 133 },
        //    { name : "Name3", gender : "O", Salary : 132 }];       

        

       
    });